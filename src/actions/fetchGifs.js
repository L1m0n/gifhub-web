import setGifs from './setGifs';
import setOffset from './setOffset';

const fetchGifs = (offset, category, query) => {
    return function (dispatch) {
        fetch(`//api.giphy.com/v1/${category}/search?q=${query}&api_key=dc6zaTOxFJmzC&offset=${offset}`)
            .then((response) => response.json())
            .then((json) => {
                const data = {
                    gifs: json.data.map((gif) => {
                        return({
                            id: gif.id,
                            gif: gif.images.downsized.url,
                            thumb: gif.images.downsized_still.url,
                            original: gif.images.original.url,
                            url: gif.url,
                            size: gif.images.downsized.size
                        })
                    })
                };
                data.gifs = data.gifs.sort((a, b) => a.size - b.size);
                dispatch(setGifs(data));
                dispatch(setOffset(json.pagination.offset));
            })
    }
};

export default fetchGifs;