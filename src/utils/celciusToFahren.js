export default function celciusToFahren(temperature) {
    let conversion=parseInt(temperature) * 9/5 + 32
    return conversion.toFixed(0)
}