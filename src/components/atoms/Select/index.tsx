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
};

const Select = ({ options, value, onChange, label }: SelectProps) => (
	<FormControl>
		{label && <InputLabel id="select-label">{label}</InputLabel>}
		<MUISelect
			labelId="select"
			id="select"
			value={value.value}
			label={value.label}
			onChange={(e) => onChange(e.target.value)}
			style={{ fontSize: "14px" }}
		>
			{options?.map((option: IOption) => (
				<MenuItem key={option.value} value={option.value}>
					{option.label}
				</MenuItem>
			))}
		</MUISelect>
	</FormControl>
);

export { Select };
export type { SelectProps };
