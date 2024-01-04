export function formatPrice(number) {
    return new Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: "EUR",
    }).format(number / 100);
}

export function getUniqueValues(data, type) {
    let unique = data.map((item) => item[type]);

    if (type === "colors") {
        unique = unique.flat();
    }

    return ["all", ...new Set(unique)];
}
