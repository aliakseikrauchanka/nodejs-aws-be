import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

import productList from './productList.json';

export const getProductsList: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(productList, null, 2),
  };
}

export const getProductsById: APIGatewayProxyHandler = async (event, _context) => {
  const productId = event.pathParameters.productId;

  const product = productList.find(product => product.id === Number(productId));
  let statusCode = 200;
  if (!product) {
    statusCode === 404;
  }

  return {
    statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(product, null, 2),
  };
}
