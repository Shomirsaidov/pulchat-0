import { Inter } from 'next/font/google'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Link from 'next/link'
import MainContainer from '../components/container'

const inter = Inter({ subsets: ['latin'] })

export const getServerSideProps = async() => {
    let todos
    await axios.get('https://jsonplaceholder.typicode.com/todos')
                .then(resp => {
                    todos = resp.data
                })
    return {
        props: {
            todos
        }
    }
}

export default function Home({ todos }) {
  return (
    <MainContainer>
        <h1 className='text-2xl font-black text-center'>Todos</h1>  
        {
            todos.map(todo => 
                
                    <Link href={`posts/${todo.id}`}>
                        <h1 className='text-xl font-bold'>{todo.title}</h1>
                        <br/>
                    </Link>
                
                ) 

        }
    </MainContainer>
  )
}





