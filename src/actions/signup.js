const signup = (data) => {
    return function (dispatch) {
        fetch('http://localhost:8081/signup', {
            method: 'POST',
            headers:{
                'Content-type': 'application/x-www-form-urlencoded'
            },
            body: `email=${data.email}&password=${data.password}&userName=${data.userName}`
        })
            .then(res => res.json())
            .then(res=> console.log(res))
            .catch(err=> console.log(err))
    }
};

export default signup;