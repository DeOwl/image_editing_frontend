import { FC, FormEvent } from 'react'
import './InputField.css'

interface Props {
    value: string
    setValue: (value: string) => void
    onSubmit: (e: FormEvent) => void
    loading?: boolean
    placeholder?: string
}

const InputField: FC<Props> = ({ value, setValue, onSubmit, loading, placeholder}) => (
    <form className="search-bar-cont" onSubmit={onSubmit}>
        <input type="text" name="filter_title" className="search-bar" placeholder={placeholder}
        value={value} onChange={(event => setValue(event.target.value))}  disabled={loading}/>
    </form>
)

export default InputField