import { useState } from 'react'

const keys = [
  '7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+','C','⌫','+/-'
]

export default function Calculator(){
  const [text,setText] = useState('0')
  const press = (k) => {
    if(k==='C') return setText('0')
    if(k==='⌫') return setText(prev => prev.length>1 ? prev.slice(0,-1) : '0')
    if(k==='+/-') return setText(prev => prev.startsWith('-')? prev.slice(1) : (prev==='0'?'0':'-'+prev))
    if(k==='='){
      try{
        // eslint-disable-next-line no-eval
        const result = eval(text)
        setText(String(result))
      }catch{
        setText('Error')
      }
      return
    }
    setText(prev => prev==='0'? k : (prev==='Error'? k : prev + k))
  }
  return (
    <div className="card">
      <div className="display">{text}</div>
      <div className="grid" style={{gridTemplateColumns:'repeat(4, 1fr)'}}>
        {keys.map(k => {
          const cls =
            k === '=' ? 'btn-equals' :
            (k === 'C' || k === '⌫') ? 'btn-danger' :
            (k === '+/-') ? 'btn-ghost' :
            (['/','*','-','+'].includes(k) ? 'btn-operator' : '')
          return (
            <button key={k} className={cls} onClick={()=>press(k)} aria-label={`Key ${k}`}>{k}</button>
          )
        })}
      </div>
    </div>
  )
}
