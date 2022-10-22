import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'Active', label: 'Active' },
  { value: 'Disable', label: 'Disable' }
]

const MyComponent = () => (
  <Select options={options} />
)

export default MyComponent
