import {
	FormControl,
	InputLabel,
	MenuItem,
	Select as MUISelect,
} from "@mui/material";

type IOption = {
	label: string;
	value: any;
};

type SelectProps = {
	options: IOption[] | null;
	value: any;
	onChange: any;
	label?: string;
	disabled?: boolean;
};

const Select = ({
	options,
	value,
	onChange,
	label,
	disabled = false,
}: SelectProps) => (
	<FormControl>
		{label && (
			<InputLabel id="select-label" style={{ fontSize: "12px" }}>
				{label}
			</InputLabel>
		)}
		<MUISelect
			disabled={disabled}
			labelId="select"
			id="select"
			value={value?.value}
			label={value?.label}
			onChange={(e) => onChange(e.target.value)}
			style={{ fontSize: "12px" }}
		>
			{options?.map((option: IOption) => (
				<MenuItem key={option?.label} value={option?.value}>
					{option.label}
				</MenuItem>
			))}
		</MUISelect>
	</FormControl>
);

export { Select };
export type { SelectProps };
