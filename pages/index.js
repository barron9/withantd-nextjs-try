import { Form, Select, InputNumber, DatePicker, Switch, Slider, Button ,Input,Icon,Avatar,Checkbox} from 'antd'
import fetch from 'isomorphic-unfetch'

const FormItem = Form.Item
const Option = Select.Option

const Index = (props) => (
  <div style={{ marginTop: 100 }}>
  
  <Form layout='vertical'>
  <FormItem
  wrapperCol={{ span: 8, offset: 8 }}
  
  >
  
  <Avatar size={64} icon="user" />
  </FormItem>
  
  <FormItem
  wrapperCol={{ span: 8, offset: 8 }}
  
  >
  <Input prefix={<Icon type="user" size="large"  style={{ color: 'rgba(0,0,0,.25)' }} />} 
  onChange={(name)=>{//this.setState({name:(name.nativeEvent.data)})
  }}
  placeholder="Kullanıcı Adı" />
  </FormItem>
  <FormItem
  wrapperCol={{ span: 8, offset: 8 }}
  
  >
  <Input prefix={<Icon type="lock"  size="large" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Şifre" type="password"/>
  </FormItem>
  
  <FormItem 
  wrapperCol={{ span: 8, offset: 8 }}
  
  >
  <Checkbox >Beni Hatırla</Checkbox>
  
  </FormItem>
  <FormItem
  style={{ marginTop: 10 }}
  wrapperCol={{ span: 8, offset: 8 }}
  >
  <Button size='large' type='primary' htmlType='submit' onClick={getdata("asas")}>
  Giriş yap
  </Button>
  <Button size='large' style={{ marginLeft: 8 }}>
  Kayıt Ol
  </Button>
  {JSON.stringify(props.shows)}
  
  </FormItem>
  </Form>
  </div>
  )
  
  
  Index.getInitialProps = async function() {
    const res = await fetch('http://169.63.69.227:5050/api/auth')
    const data = await res.json()
    
    console.log(`Show data fetched. Count: ${data.length}`)
    
    return {
      shows: data
    }
  }

  Index.getdata =()=> async function(){
    
    const res = await fetch('http://169.63.69.227:5050/api/auth')
    const data = await res.json()
    
    console.log(`Show data fetched. Count: ${data.length}`)
    
    return {
      shows: data
    }

  }
  export default Index
  