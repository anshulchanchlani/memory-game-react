export const BASE_URL = 'http://localhost:8111';
export const IMG_SIZE = 200;
export const IMG_TYPE = 'svg'
export const IMG_STANDARD_TAG = 'plain'
export const STANDARD_IMG_URL = `${BASE_URL}/${IMG_TYPE}/${IMG_STANDARD_TAG}/${IMG_SIZE}`;

export const getStandardTemplateImage = () =>{
    return STANDARD_IMG_URL;
}

export const getImage = (tag) => {
    return `${BASE_URL}/${IMG_TYPE}/${tag}/${IMG_SIZE}`;
}

export const flipCardTags = [
    { tag: "dog", isMatched: false },
    { tag: "cat", isMatched: false },
    { tag: "tree", isMatched: false },
    { tag: "phone", isMatched: false },
    { tag: "atom", isMatched: false },
    { tag: "sky", isMatched: false }
  ];
