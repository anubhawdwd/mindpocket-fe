import { PlusIcon } from './assets/PlusIcon'
import { ShareIcon } from './assets/shareIcon'
import Button from './component/Button'
import Card from './component/Card'

function App() {

  return (
    <>

      <Button variant='primary' size="md" text='Add Note' disable={false} iconBefore={<ShareIcon />} />
      <Button variant="secondary" size="md" text='Share' disable={false} iconBefore={<PlusIcon />} />
      <section className='flex '>
        <Card noteType='notes' heading='Nusrat' userUrl='https://www.youtube.com/watch?v=d7AqPH-LgmI&t=1266s' userNotes='Best part from 19m:20s' />
        <Card noteType='youtube' heading='Nusrat' userUrl='https://www.youtube.com/watch?v=d7AqPH-LgmI&t=1266s' userNotes='Best part from 19m:20s' />
        <Card noteType='twitterX' heading='WebDev' userUrl='https://x.com/MentorWebDev/status/1571853415990558720' userNotes='check this tweet' />
        <Card noteType='twitterX' heading='WebDev' userUrl='https://x.com/MentorWebDev/status/1571853415990558720' userNotes='check this tweet' />
      </section>

    </>
  )
}

export default App
