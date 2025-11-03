import { useMemo, useState } from 'react'

const denoms = [2000,500,200,100,50,20,10,5,2,1]

function toWords(number){
  const units=['','One','Two','Three','Four','Five','Six','Seven','Eight','Nine']
  const teens=['Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen']
  const tens=['','','Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninety']
  if(number===0) return 'Zero'
  let words=''
  const helper=(num)=>{
    let s=''
    if(Math.floor(num/100)>0){ s += units[Math.floor(num/100)]+' Hundred '; num%=100 }
    if(num>0){
      if(num<10) s += units[num]
      else if(num<20) s += teens[num-10]
      else { s += tens[Math.floor(num/10)]; if(num%10>0) s += ' '+units[num%10] }
    }
    return s
  }
  if(Math.floor(number/10000000)>0){ words += toWords(Math.floor(number/10000000))+' Crore '; number%=10000000 }
  if(Math.floor(number/100000)>0){ words += toWords(Math.floor(number/100000))+' Lakh '; number%=100000 }
  if(Math.floor(number/1000)>0){ words += toWords(Math.floor(number/1000))+' Thousand '; number%=1000 }
  words += helper(number)
  return words.trim()
}

export default function Cash(){
  const [counts,setCounts]=useState(Array(denoms.length).fill(''))
  const totals = useMemo(()=> counts.map((c,i)=> (parseInt(c||'0',10)||0)*denoms[i]),[counts])
  const sum = useMemo(()=> totals.reduce((s,x)=>s+x,0),[totals])

  const onChange=(i,val)=>{
    const v = val.replace(/[^0-9]/g,'')
    setCounts(prev=> prev.map((x,idx)=> idx===i? v : x))
  }

  return (
    <div className="card">
      <h3>Cash Calculator</h3>
      {denoms.map((d,i)=> (
        <div key={d} className="input-row">
          <label style={{minWidth:80}}>{d}</label>
          <input value={counts[i]} onChange={e=>onChange(i,e.target.value)} placeholder={`Count of ${d}`} />
          <div>= {totals[i]}</div>
        </div>
      ))}
      <h3>Total Cash: {sum}</h3>
      <p>Total Cash In Words: {toWords(sum)}</p>
    </div>
  )
}
