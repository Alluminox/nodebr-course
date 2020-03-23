/*
Obter usuario
Obter numero de telefone de um usuario a parit de um id

*/

const getUser = () => {
    return new Promise((r, j) => {
        setTimeout(() => {
            r({
                id: 1,
                nome: 'Aladin',
                data: Date.now()
            })
        }, 1000);
    })
}


const getPhone = (userId) => {
    return new Promise((r, j) => {
        setTimeout(() => {
            r({
                phone: '1234',
                prefix: 11
            })
        }, 2000);
    })
}

const getAddress = (userId) => {
    return new Promise((r, j) => {
        setTimeout(() => {
            r({
                street: 'street 1',
                number: 7
            })
        })
    })
}


/*
getUser(function resolverUsuario(err1, user) {

    // null || "" || 0 === false

    if (err1) {
        return console.error('DEU RUIM EM USUARIO', err1);
    }


    getPhone(user.id, function resolvePhone(err2, phone) {
        if (err2) {
            return console.error('DEU RUIM EM PHONE', err2);
        }
    });

    getAddress(user.id, function resolveAddress(err3, address) {
        if (err3) {
            return console.error('DEU RUIM EM ADDRESS', err3);
        }
    });

})

*/

/*
getUser()
.then(user => getAddress(user.id).then(address => ({user, address})))
.then((data) => getPhone(data.user.id).then(phone => ({ ...data, phone})))
.then(console.log);
*/


async function main() {
    try {
        console.time('med-promise');
        const user = await getUser();

        const result = await Promise.all([
            await getPhone(user.id),
            await getAddress(user.id)
       ])

        console.log(Object.assign({}, user, {phone: result[0]}, {address: result[1]} ));

        console.timeEnd('med-promise');
    } catch(err) {
        console.log("Error -> ", err);
    }
}

main();