/* eslint-disable no-nested-ternary */
import { Button, Rating } from "@mui/material";
import { Select } from "@components/atoms/forms/Select";
import { useState } from "react";
import { IProduct } from "@contexts/types/ProductTypes";
import {
	PriceText,
	RattingText,
	TitleText,
} from "@components/templates/styled/text";
import { priceFormattingUS } from "@helpers/currencyFormatting";
import { useCart } from "@hooks/useCart";
import { BsCheck } from "react-icons/bs";
import {
	ConfirmationContainer,
	ProductCardContainer,
	RatingContainer,
} from "./style";

type ProductCardProps = {
	product: IProduct;
	onClick(product: IProduct, quantity: number): void;
};

const ProductCard = ({ product, onClick }: ProductCardProps) => {
	const { showConfirmation } = useCart();
	const [selectedQuantity, setSelectedQuantity] = useState({
		value: 1,
		label: "1",
	});

	function handleSelectChange(value: number) {
		setSelectedQuantity({ value, label: String(value) });
	}

	return (
		<ProductCardContainer>
			<img src={product.image.url} alt={product.title} />
			<TitleText>{product.title}</TitleText>
			<RatingContainer>
				<Rating name="read-only" value={product.rating} readOnly />
				<RattingText>{product.rating}</RattingText>
			</RatingContainer>

			<section>
				<PriceText>{priceFormattingUS(String(product.price))}</PriceText>
				<Select
					disabled={product?.quantity < 1}
					options={
						product?.quantity < 1
							? [{ value: 0 + 1, label: String(0) }]
							: [...Array(product.quantity)].map((_, i) => ({
									value: i + 1,
									label: `${i + 1}`,
							  }))
					}
					value={selectedQuantity}
					onChange={(e: any) => handleSelectChange(e)}
					label=""
				/>
			</section>
			<Button
				disabled={product?.quantity < 1}
				onClick={() => onClick(product, selectedQuantity.value)}
				variant="outlined"
				style={{ textTransform: "none" }}
			>
				{product?.quantity < 1 ? (
					"Unavailable"
				) : showConfirmation === product.id ? (
					<ConfirmationContainer>
						<BsCheck />
						<p>Added</p>
					</ConfirmationContainer>
				) : (
					"Add to cart"
				)}
			</Button>
		</ProductCardContainer>
	);
};

export { ProductCard };
export type { ProductCardProps };
