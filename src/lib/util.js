export function formatData(data) {
    var result = [];
    for (var key in data) {
        result.push(key)
    }
    return result
}
