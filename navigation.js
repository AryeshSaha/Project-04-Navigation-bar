let navStatus = 0;

const toggle = () => {
    if (!navStatus){
        $('.maindiv').css('width', '100%')
        $('li').css('display', 'block')
        navStatus = 1;
    } else {
        $('.maindiv').css('width', '0')
        $('li').css('display', 'none')
        navStatus = 0;
    }
} 