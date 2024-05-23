let dataPromise;
let data;

const fetchData = () => {
    if (!dataPromise) {
        dataPromise = new Promise((resolve) => {
            setTimeout(() => {
                data = {
                    name: 'John Doe',
                    bio: 'Software developer with a passion for learning new technologies.',
                    avatar: 'https://via.placeholder.com/150'
                };
                resolve(data);
            }, 4000);
        });
    }
    return dataPromise;
};

const wrapPromise = (promise) => {
    let status = 'pending';
    let result;
    let suspender = promise.then(
        (res) => {
            status = 'success';
            result = res;
        },
        (err) => {
            status = 'error';
            result = err;
        }
    );
    return {
        read() {
            if (status === 'pending') {
                throw suspender;
            } else if (status === 'error') {
                throw result;
            } else if (status === 'success') {
                return result;
            }
        }
    };
};

const resource = wrapPromise(fetchData());

export { resource };