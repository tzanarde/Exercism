export class HighScores {
  constructor(scoreList) {
    this.scoreList = scoreList;
  }

  topScoreList(topLength) {
    return this.scoreList.sort((a, b) => b - a).slice(0, topLength);
  }

  scoreListLength() {
    return this.scoreList.length;
  }

  get scores() {
    return this.scoreList;
  }

  get latest() {
    return this.scoreList[this.scoreListLength() - 1];
  }

  get personalBest() {
    return this.topScoreList(1)[0];
  }

  get personalTopThree() {
    return this.topScoreList(3);
  }
}
