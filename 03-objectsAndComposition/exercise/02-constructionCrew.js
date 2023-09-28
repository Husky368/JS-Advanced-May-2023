function constructionCrew(input) {
    let obj = input;
    if (obj.dizziness) {
        obj.levelOfHydrated += obj.weight * 0.1 * obj.experience
        return obj
    }
    return obj
} constructionCrew({ weight: 95, experience: 3, levelOfHydrated: 0, dizziness: false })
