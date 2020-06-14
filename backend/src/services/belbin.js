module.exports = class Belbin {
  constructor (Team = {}) {
    this.Team = Team
    this.preset = {
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

  async getBestUsers (teamId) {
    const team = await this.Team.findById(teamId).populate('members')
    const testMembers = team.members.map(member => member.belbinTest)

    const sumValues = { ...this.preset }

    testMembers.map(test => {
      for (const key of Object.keys(sumValues)) {
        sumValues[key] += Number(test[key])
      }
    })

    console.log(sumValues)
  }

  calculateAnswer (data) {
    const answers = {
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
