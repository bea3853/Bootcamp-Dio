// um set é um estrura que armazena valores unicos, dferente do arrayque podemos ter valores repetidos 

function getadmins(map){
  let admins = []
    for([key, value] of map){
    
    if(value === 'admin'){
    
        admins.push(key);
    
    }
    
    }
    return admins;
    }
    
    
    const usuarios = new Map();
    
    usuarios.set('Luiz', 'admin');
    usuarios.set('Stephany', 'admin');
    usuarios.set('Jorge', 'admin');
    usuarios.set('Natália', 'admin');
    
    
    console.log(getadmins(usuarios));
    

    // add valor no set add
    // has verificar 
    // delete - deletar 
    // set.add / set.has / set.delete 
    // dá para fazer mais operações no array que no set 