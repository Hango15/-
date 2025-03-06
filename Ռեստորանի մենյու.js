var food = prompt("Ասեք ձեր պատվերը");
var ord;
switch (food) {
    case "Պիցա":
        ord = document.write("200դրամ");
        break;
    case "Պաղպաղակ":
        ord = document.write("150դրամ");
        break;
    case "Ապուր":
        ord = document.write("300դրամ");
        break;
    case "Սուրճ":
        ord = document.write("100դրամ");
        break;
    case "miqoi klir":
        ord = document.write(" shat poqr a");
        break;
    case "SHAURMA":
        ord = document.write("∞ դրամ");
        break;
    case "burger":
        ord = document.write("400 դրամ");
        break;
    default:
        ord = document.write("այդպիսի ապրանք չունենք");
}

