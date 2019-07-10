function validateEmail( data ){
    if (typeof(data) != 'string'){
        return 'invalid e-mail'; // klaida: netinkamas duomenų tipas
    }//-----
    if (data === ''){
        return 'invalid e-mail'; // klaida: tuscas teksas
    }//-----
    if (data.indexOf('@')==-1){
        return 'invalid e-mail: should contain "@" character'; //klaida: nėra @
    }//-----
    let etaCount = 0;
    for (let i=0; i<data.length; i++){
        if (data[i]=='@'){
            etaCount++;
        }
    }
    if(etaCount > 1){
        return 'invalid e-mail: should contain only one "@" character'; // klaida: turi buti tik 1 @ simbolis
    }//-----
    if(data[0]=='@'){
        return 'invalid e-mail: lack of local part (John.Doe@example.com)'; //klaida: truksta local part pries @ simbili
    }//-----
    if(data[data.length-1]=='@'){
        return 'invalid e-mail: lack of domen part (John.Doe@example.com)'; //klaida: truksta domai-part už @ simbsimbolio
    }//-----
    var abece = [],
    local_part = data.substr(0, data.indexOf('@')),
    domain = data.substr(data.indexOf('@')+1,data.length-1),
    badLetters = ['!','#','$','%','&','*','+','-','/','=','?','^','_','{','|','}','~'];
    
    for(var i=0; i<local_part.length; i++){
        var charCode = local_part.charCodeAt(i);
        
        if(charCode > 64 && charCode < 91){
            abece.push(data[i]);
        }
        else if (charCode > 96 && charCode < 123){
            abece.push(data[i]);
        }
    }
        if(abece.length < 1){
            return 'invalid e-mail: local part should contain although one letter character'; //klaida: local part turi tureti bent viena raidę
        }
    //-----
    if(local_part.indexOf('.') > -1){
        var dot = [];
        for(var i=0;i<local_part.length;i++){
            if(local_part[i] == '.'){
                dot.push(local_part[i]);
            }
        }
        if (dot.length > 1){
            return 'invalid e-mail: local part should contain no more than one full-stop character'; // klaida: local part negali tureti daugiau kaip vieno tasko
        }
    }
    if(local_part[0]=='.'){
        return 'invalid e-mail: local part should not begin with a full-stop character'; //klaida: negali tureti prasideti tasku
    }
    if(local_part[local_part.length-1]=='.'){
        return 'invalid e-mail: last local part symbol should not be a full-stop character'; //klaida: negali baigtis tasku
    }
    for(var i=0; i<badLetters.length; i++){
        if (local_part.indexOf(badLetters[i])> -1){
            return 'invalid e-mail: one or more invalid characters were used:"!#$%&*+-/=?^_{|}~"' //klaida: local part negali būti draudžiamų simbolių
        }
    }
    if(domain.length < 4){
        return 'invalid e-mail: shortest domain should contain at least 4 characters' ; //klaida: domain turi turėti bent 4 simbolius
    }
    if(domain.indexOf('.') > -1){
        if (domain[0]=='.'){
            return 'invalid e-mail: domain should not begin with full-stop character '; //domain turi tašką, kuris YRA pirmoje pozicijoje
        }
    }
    var domain_name = domain.substr(0, domain.indexOf('.')),
        domain_extension = domain.substr(domain.indexOf('.'),domain.length-1),
        invalid_symbols = ['#','%','&','*','{','}','[',']','(',')'];
        invald_symbols_count = [];
        if (domain_name.length<1 || domain_name.length > 63){
            return 'invalid e-mail: domain_name length unacceptable'; //domain_name ilgis netinkamas
        }
        for(var i=0; i<invalid_symbols.length; i++){
            if (domain_name.indexOf(invalid_symbols[i])>-1){
                invald_symbols_count.push(domain_name[domain_name.indexOf(invalid_symbols[i])]);
            }
        }
        if (invald_symbols_count.length > 0){
            return 'invalid e-mail: one or more invalid characters were used:"#%&*{}[]()"' //yra neleistinu simboliu
        }
        var domain_hyphen = [];
        if (domain_name.indexOf('-')>-1){
            for(var i=0; i<domain_name.length;i++){
                if(domain_name[i]=='-'){
                    domain_hyphen.push(domain_name.indexOf(domain[i]));
                }
            }
            if(domain_name[0]=='-'){
                return 'invalid e-mail: domain name should not begin with a hyphen (-) character'; //domain_name negali prasidėti - simboliu
            }
            if(domain_name[domain_name.length-1]=='-'){
                return 'invalid e-mail: last local part symbol should not be a hyphen (-) character';//domain_name negali baigtis - simboliu
            }
            for(var i=0; i<domain_hyphen.length; i++ ){
                if (domain[domain_hyphen[i]+1] === '-'){
                    return 'invalid e-mail: domain_name should not contain two consecutive hyphen (-) characters' //domain_name negali turėti dviejų iš eilės -- simboliu
                }
            }

        }
        if(domain_extension.length<3){
            return 'invalid e-mail: domain_extension should contain at leats 3 characters '; //domain_extension turi tureti bent 3 simbolius
        }
        if(domain_extension.indexOf('.')>-1){
            var domain_extension_dot = [],
                domain_extension_dot_position = [];
            for (var i=0; i< domain_extension.length; i++ ){
                if (domain_extension[i]=='.'){
                    domain_extension_dot.push(domain_extension[i]);
                    domain_extension_dot_position.push(i);
                }
            }
            if(domain_extension_dot.length>2){
                return 'invalid e-mail: domain_extension should not contain more than 2 full-stop characters'; //domain_extension negali turėti daugiau 2 taškų
            }
            if(domain_extension[1]=='.'){
                return 'invalid e-mail: domain_extension should not contain 2 consecutive full-stop characters'; //domain_extension negali turėti 2 taškų iš eilės
            }
            if(domain_extension_dot_position[1]<3){
                return 'invalid e-mail: space between two full-stop characters should be at least two characters long';//pirma extencion dalis turi būti bent 2 simbolių
            }
        }
        if(domain_extension.indexOf('-')>-1){
            var domain_extension_hyphen = [],
                domain_extension_hyphen_position = [];
            for (var i=0; i< domain_extension.length; i++ ){
                if (domain_extension[i]=='-'){
                    domain_extension_hyphen.push(domain_extension[i]);
                    domain_extension_hyphen_position.push(i);
                }
            }
            if(domain_extension_hyphen.length > 1){
                return 'invalid e-mail: domain_extension should not contain more than one hyphen (-) character';//domain_extension gali tureti tik 1 -
            }
            if(domain_extension.indexOf('-') <= 2){
                return 'invalid e-mail: space between full-stop character and hyphen (-) character should be at least two characters long';//domain_extension - negali būti antroje pozicijoje
            }
        }
        var justLetters = domain_extension.split('.').join('').split('-').join('');
        for(var i=0; i<justLetters.length; i++){
            var charCode2 = justLetters.charCodeAt(i);
            if(charCode2 < 65 ){
                return 'invalid e-mail: domain_extension contains not only letters';//visi kiti ženklai be . ir - turi būti raides
            }
            else if (90 < charCode2 && charCode2 < 97 ){
                return 'invalid e-mail: domain_extension contains not only letters';
            }
            else if (123 < charCode2){
                return 'invalid e-mail: domain_extension contains not only letters';
            }
        }
    return true;
}

function validateName( data ){
    if (typeof data != 'string'){
        return 'invalid Name: wrong input';
    }
    if (data == ''){
        return 'invalid Name: no Name found';
    }
    var long_name = data.split(' ').join('');
    for(var i=0; i<long_name.length; i++){
        var charCode = long_name.charCodeAt(i);
            if(charCode < 65 ){
                return 'invalid Name: contains somthing more than only letters and spaces';
            }
            else if (90 < charCode && charCode < 97 ){
                return 'invalid Name: contains somthing more than only letters and spaces';
            }
            else if (123 < charCode && charCode < 260){
                return 'invalid Name: contains somthing more than only letters and spaces';
            }
            else if (263 < charCode && charCode < 268){
                return 'invalid Name: contains somthing more than only letters and spaces';
            }
            else if (269 < charCode && charCode < 278){
                return 'invalid Name: contains somthing more than only letters and spaces';
            }
            else if (281 < charCode && charCode < 302){
                return 'invalid Name: contains somthing more than only letters and spaces';
            }
            else if (303 < charCode && charCode < 352){
                return 'invalid Name: contains somthing more than only letters and spaces';
            }
            else if (353 < charCode && charCode < 362){
                return 'invalid Name: contains somthing more than only letters and spaces';
            }
            else if (363 < charCode && charCode < 370){
                return 'invalid Name: contains somthing more than only letters and spaces';
            }
            else if (371 < charCode && charCode < 381){
                return 'invalid Name: contains somthing more than only letters and spaces';
            }
            else if (382 < charCode){
                return 'invalid Name: contains somthing more than only letters and spaces';
            }
    }
    if(data.length>255){
        return 'invalid Name: name too long';
    }
    
    return true;
}
function validateMessage( data ){
    if (data == ''){
        return 'No message';
    }
    var badSymbols = ['&','^','{','}','[',']','|','>','<','~','`','"']
    for(var i=0; i<badSymbols.length; i++){
        if(data.indexOf(badSymbols[i])>-1){
            return 'message contains invalid characters (&^{}[]|><~`")';
        }
    }
    if(data.length>1000){
        return `message too long, if it can't be shortened please contact us by e-mail:  toma@front-end8.lt  or  athur@front-end8.lt` ;
    }
    
    return true;
}