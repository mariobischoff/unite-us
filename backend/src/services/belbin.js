module.exports = class Belbin {
  constructor (Team = {}) {
    this.Team = Team
    this.roleBody = {
      PL: 0,
      RI: 0,
      CO: 0,
      SH: 0,
      ME: 0,
      TW: 0,
      IM: 0,
      CF: 0,
      SP: 0,
      DR: 0
    }
  }

  async _getNeededRoles (teamId) {
    const team = await this.Team.findById(teamId).populate('members')
    const testMembers = team.members.map(member => member.belbinTest)

    const neededRoles = { ...this.roleBody }
    delete neededRoles.DR

    testMembers.map((test) => {
      const orderedRoles = Object.keys(this.roleBody)
      orderedRoles.sort((a, b) => test[a] - test[b]).reverse()

      if (orderedRoles[0] === 'SH' || orderedRoles[0] === 'CO') {
        delete neededRoles.CO
        delete neededRoles.SH
      }

      if (orderedRoles[0] === 'PL') delete neededRoles.PL
      if (orderedRoles[0] === 'ME') delete neededRoles.ME
    })

    return Object.keys(neededRoles)
  }

  async filterUsers (users, teamId) {
    const neededRoles = await this._getNeededRoles(teamId)
    users.map((user, index) => {
      const orderedRoles = ['PL', 'RI', 'CO', 'SH', 'ME', 'TW', 'IM', 'CF', 'SP', 'DR']
      orderedRoles.sort((a, b) => user.belbinTest[a] - user.belbinTest[b]).reverse()
      user.orderedRoles = orderedRoles

      if (user.orderedRoles[0] === 'SH' || user.orderedRoles[0] === 'CO') {
        if (!neededRoles.includes('SH') || !neededRoles.includes('CO')) users.splice(index, 1)
      }
      if (user.orderedRoles[0] === 'PL' && !neededRoles.includes('PL')) users.splice(index, 1)
      if (user.orderedRoles[0] === 'ME' && !neededRoles.includes('ME')) users.splice(index, 1)
    })
    return users
  }

  calculateAnswer (data) {
    const answers = { ...this.roleBody }
    data.map(answer => {
      answers[answer.group] += answer.value
    })
    Object.keys(answers)
      .forEach(group => {
        answers[group] = ((answers[group] / 70) * 100).toFixed(2)
      })
    return answers
  }
}
