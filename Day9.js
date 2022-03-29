const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]

const langSet = new Set(languages)
console.log(langSet)
console.log(langSet.size)

const counts = []
const count = {}

for (const l of langSet){
    const filteredLang = languages.filter((lng) => lng === [])
    console.log(filteredLang)
    counts.push({lang: 1, count: filteredLang.length})
}
console.log(counts)

const numbers = [5, 3, 2, 5, 5, 9, 4, 5]

let a = [1, 2, 3 ,4, 5]
let b = [3, 4, 5, 6]
let A = new Set(a)
let c = b.filter((num) => !A.has(num))
console.log(c)

