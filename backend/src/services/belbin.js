module.exports = class Belbin {
  constructor (User = {}, Team = {}) {
    this.User = User
    this.Team = Team
  }

  getBestUsers () {

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
