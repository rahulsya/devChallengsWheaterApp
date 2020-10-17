export default function dateFormat(date) {
    const day=['sun','mon','tue','wed','thu','fri','sat']   
    const month=['jan','feb','mar','apr','may','jun','jul','aug','sep','okt','nov','dec'] 

    let dateFormat=new Date(date)
    let newDay=day[dateFormat.getDay()]
    let newDate=dateFormat.getDate()
    let newMonth=month[dateFormat.getMonth()]

    return `${newDay}, ${newDate} ${newMonth}`
}