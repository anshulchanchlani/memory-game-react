import * as ops from './index';

describe('Utility tests',()=>{
    test("Test for standard template image",()=>{
        const imgUrl = `${ops.BASE_URL}/${ops.IMG_TYPE}/${ops.IMG_STANDARD_TAG}/${ops.IMG_SIZE}`;
        expect(ops.getStandardTemplateImage()).toEqual(imgUrl)
    })
    test("Test for getting image url based on tag",()=>{
        const imgUrl = `${ops.BASE_URL}/${ops.IMG_TYPE}/cat/${ops.IMG_SIZE}`;
        expect(ops.getImage('cat')).toEqual(imgUrl)
    })
})