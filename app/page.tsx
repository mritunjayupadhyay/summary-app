import BrowserHistory from "@/components/BrowserHistory";
import DisplayResult from "@/components/DisplayResult";
import Form from "@/components/Form";
import Header from "@/components/header/Header";
import { store } from "@/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <main>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
        <Header />
        <section className='mt-16 w-full max-w-xl'>
          <div className='flex flex-col w-full gap-2'>
          <Form />
          <BrowserHistory />
          <DisplayResult />
          </div>
          
        </section>
      </div>
    </main>
    </Provider>
  )
}
