let month = prompt("Enter a month: ")

switch (month.toLowerCase()){
    case 'september' || 'october' || 'november':
        alert("Winter")
        break
    default:
        alert("Not a month")
}