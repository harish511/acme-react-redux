import { SAVE_PRODUCT, DELETE_PRODUCT } from './constants';

export const saveProduct = product => ({
    type: SAVE_PRODUCT,
    product
});

export const deleteProduct = product => ({
    type: DELETE_PRODUCT,
    product
});
