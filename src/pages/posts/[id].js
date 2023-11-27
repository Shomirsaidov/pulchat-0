import axios from 'axios'
import MainContainer from '../components/container'

export const getServerSideProps = async({params}) => {
    const postId =  params.id
    let todo
    await axios.get('https://jsonplaceholder.typicode.com/todos/' + postId)
                .then(resp => {
                    todo = resp.data
                    console.log('data got !')
                })
                .catch(e => {
                    todo = {title: 'Title', completed: 'yes', id: 5}
                })
    return {
        props: {
            todo
        }
    }
}


export default function Home({todo}) {
    return (
      <MainContainer metaData={{title: todo.title}}>
        <h1 className='text-2xl font-black text-center'>{ todo.title }</h1>    
        <h1 className={todo.completed ? 'text-2xl font-black text-center text-green-600' : 'text-2xl font-black text-center text-blue-600'}>{ todo.completed ? 'Completed' : 'Pending'}</h1>   
      </MainContainer>
    )
}















