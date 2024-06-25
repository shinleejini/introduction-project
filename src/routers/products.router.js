import express from 'express';
import { Product } from '../schemas/product.schema.js';
const productsRouter = express.Router();

// 상품 생성 (Create)
productsRouter.post('/products', async (req, res, next) => {
    // 상품 정보 파싱하기
    const { name, description, manager, password } = req.body;

    // DB에 저장하기
    const product = new Product({name, description, manager, password})
    let data = await product.save();
    
    // 비밀번호 출력하지 않기
    data = {...data.toJSON(), password: undefined};

    // 완료 메시지 반환하기
    return res.status(201).json({status: 201, message: "상품 생성에 성공했습니다.", data});
});

// 상품 목록 조회 (Read)
productsRouter.get('/products', (req, res, next) => {
    // DB에서 조회하기 (생성 일시 기준 내림차순 정렬)
    // 완료 메시지 반환하기
});

// 상품 상세 조회 (Read)
productsRouter.get('/products/:id', (req, res, next) => {
    // 상품 아이디 파싱하기
    // DB에서 조회하기
    // 완료 메시지 반환하기
});

// 상품 수정 (Update)
productsRouter.put('/products/:id', (req, res, next) => {
    // 상품 아이디 파싱하기
    // 상품 수정 정보 파싱하기
    // DB에서 조회하기 (패스워드 포함)
    // 비밀번호 일치 여부 확인
    // DB에 갱신하기
    // 완료 메시지 반환하기
});

// 상품 삭제 (Delete)
productsRouter.delete('/products/:id', (req, res, next) => {
    // 상품 아이디 파싱하기
    // DB에서 조회하기 (패스워드 포함)
    // 비밀번호 일치 여부 확인
    // DB에 삭제하기
    // 완료 메시지 반환하기
});

export { productsRouter };