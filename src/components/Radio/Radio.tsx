import './Radio.scss';

type RadioProps = {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
  checked: boolean;
};

export const Radio = ({ label, checked, onChange, value }: RadioProps) => {
  return (
    <span className='radio'>
      <input
        className='radioInput'
        onChange={onChange}
        name={label}
        type='radio'
        id={label}
        checked={checked}
        value={value}
      />
      <label className='radioLabel' htmlFor={label}>
        {label}
      </label>
    </span>
  );
};
