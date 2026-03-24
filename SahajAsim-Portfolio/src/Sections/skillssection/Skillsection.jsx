
import defaulthtml from './skillicons/htmldefault.svg'
import html from './skillicons/html.svg'
import defaultcss from './skillicons/cssdefault.svg'
import css from './skillicons/css.svg'
import defaultJs from './skillicons/defaultJs.svg'
import Js from './skillicons/Js.svg'
import Cardskill from './Cardskill'
import react from './skillicons/react.svg'
import defaultreact from './skillicons/defaultreact.svg'
import defaultTailwind from './skillicons/defaultTailwind.svg'
import defaultgit from './skillicons/defaultgit.svg'
import git from './skillicons/git.svg'
import defaultgithub from './skillicons/defaultgithub.svg'
import github from './skillicons/github.svg'
import Tailwind from './skillicons/Tailwind.svg'
import defaultsql from './skillicons/defaultsql.svg'
import sql from './skillicons/sql.svg'
import defaultnodejs from './skillicons/defaultnodejs.svg'
import nodejs from './skillicons/nodejs.svg'
import defaultnpm from './skillicons/defaultnpm.svg'
import npm from './skillicons/npm.svg'
import defaultvscode from './skillicons/defaultvscode.svg'
import vscode from './skillicons/vscode.svg'
import defaultvite from './skillicons/defaultvite.svg'
import vite from './skillicons/vite.svg'

const cardData=[{
    id: 1,
    name: 'Html',
    normalIcon: defaulthtml,
    hoverIcon: html
  },
  {
 id: 2,
    name: 'Css',
    normalIcon: defaultcss,
    hoverIcon: css
  }
,{
  id: 3,
    name: 'Js',
    normalIcon: defaultJs,
    hoverIcon: Js
},
{
 id: 4,
    name: 'React',
    normalIcon: defaultreact,
    hoverIcon:react
}
,{
  id: 5,
    name: 'Tailwind',
    normalIcon: defaultTailwind,
    hoverIcon:Tailwind
},
{
 id: 6,
    name: 'Git',
    normalIcon: defaultgit,
    hoverIcon:git
},
{
 id: 7,
    name: 'Github',
    normalIcon: defaultgithub,
    hoverIcon:github
},
{
  id: 8,
    name: 'Sql',
    normalIcon: defaultsql,
    hoverIcon:sql
},
{
  id: 9,
    name: 'Nodejs',
    normalIcon: defaultnodejs,
    hoverIcon:nodejs
},
{
   id: 10,
    name: 'Npm',
    normalIcon: defaultnpm,
    hoverIcon:npm
},
{
   id: 11,
    name: 'Vscode',
    normalIcon: defaultvscode,
    hoverIcon:vscode
},
{
     id: 12,
    name: 'Vite',
    normalIcon: defaultvite,
    hoverIcon:vite
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
    <div className='mt-15 bg-black/5 backdrop-blur-xs border-transparent shadow-[8px_8px_30px_rgba(0,0,0,0.8),0_0_15px_rgba(255,255,255,0.3)] rounded-xl  text-white h-90 w-2/3 m-auto p-5  gap-2'>
<h1 className='font-bold text-3xl mb-10'>Tools & Skills</h1>
<div className='flex flex-wrap gap-5' >
{cardgrid}

</div> 

    </div>
  )
}

export default Skillsection