
import defaulthtml from './skillicons/htmldefault.svg'
import html from './skillicons/html.svg'
import defaultcss from './skillicons/cssdefault.svg'
import css from './skillicons/css.svg'
import Cardskill from './Cardskill'

const cardData=[{
    id: 1,
    name: 'HTML',
    normalIcon: defaulthtml,
    hoverIcon: html
  },
  {
 id: 2,
    name: 'CSS',
    normalIcon: defaultcss,
    hoverIcon: css
  }]
 const cardgrid=[];
  cardData.map((card) => {
    cardgrid.push(
      <Cardskill 
       
        normalIcon={card.normalIcon}
        hoverIcon={card.hoverIcon}
        name={card.name}
      />
    );
  });
const Skillsection = () => {

    return (
    <div className='mt-15 bg-black/5 backdrop-blur-xs border-transparent shadow-[0_0_15px_rgba(255,255,255,0.6)] rounded-xl  text-white h-90 w-2/3 m-auto p-5  gap-2'>
<h1 className='font-bold text-3xl mb-10'>Tools & Skills</h1>
<div className='flex flex-wrap gap-5'>
{cardgrid}

</div>

    </div>
  )
}

export default Skillsection