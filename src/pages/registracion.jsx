import { Button, Checkbox, Form, Input } from 'antd'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Logins = () => {

  const onFinish = (values) => {
    const navigate = useNavigate()

    const encontrado = [values]
    if (encontrado) {
      navigate('/home')
      console.log(encontrado)
    }
    onFinishFailed()
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600, margin: 150
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <NavLink to='/homeadmin'>
        <Button type="secundary" style={{ margin: '20px', border: '1px black solid' }} >
          Entrar
        </Button>
      </NavLink>

      <NavLink to='/registro'>
        <Button type="secundary" style={{ margin: '20px', border: '1px black solid' }}>
          Registro
        </Button>
      </NavLink>
    </Form.Item>
  </Form>
}

export default Logins