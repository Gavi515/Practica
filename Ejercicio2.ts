const allowedSortByFields = ["name", "lastname", "edad", "updateAt", "createdAt"];

function getSortBy(sortBy?: string): Record<string, number> {

    const defaultSort = { createdAt: -1 };

    if (!sortBy) {
        return defaultSort;
    }


    const [field, order] = sortBy.split('-');


    const isValidField = allowedSortByFields.includes(field);
    const isValidOrder = order === 'asc' || order === 'desc';


    if (!isValidField || !isValidOrder) {
        return defaultSort;
    }

    return { [field]: order === 'asc' ? 1 : -1 };
}

console.log(getSortBy("name-asc"));        // { name: 1 }
console.log(getSortBy("lastname-desc"));   // { lastname: -1 }
console.log(getSortBy("edad-asc"));        // { edad: 1 }
console.log(getSortBy("updateAt-desc"));   // { updateAt: -1 }
console.log(getSortBy("invalid-desc"));    // { createdAt: -1 } (entrada inválida)
console.log(getSortBy());                  // { createdAt: -1 } (sin parámetro)
