import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export const ProductCard = ({ product, onClick }: ProductCardProps) => {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {product.featured && (
          <span className="absolute top-4 left-4 bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
            Featured
          </span>
        )}
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-600 mb-1">{product.category}</p>
        <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-gray-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
          {product.stock < 10 && product.stock > 0 && (
            <p className="text-xs text-orange-600 font-medium">Only {product.stock} left</p>
          )}
          {product.stock === 0 && (
            <p className="text-xs text-red-600 font-medium">Out of stock</p>
          )}
        </div>
      </div>
    </div>
  );
};
