class Anime {
    constructor(title) {
        this.title = title
    }

    publish() {
        this.published = true
    }
}

const jujutsoKaisen = new Anime("Jujutso Kaisen")
const shingekiNoKyojin = new Anime("Shingeki no Kyojin")

jujutsoKaisen.publish()

console.log(jujutsoKaisen)
console.log(shingekiNoKyojin)