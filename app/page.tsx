"use client";
import Image from 'next/image'
import AppLayouts from '@/layouts/AppLayouts'
import { useState } from 'react';

export default function Home() {
  const [seeMore, setSeeMore] = useState(false);

  const OnClickSeeMore = (e : any) => {
    e.preventDefault();
    if (seeMore) {
      setSeeMore(false);
    } else {
      setSeeMore(true);
    }
  }
  return (
    <AppLayouts>
      <AppLayouts.AddHeader show={true} />
      <AppLayouts.Body>
        <div className='md:px-12 px-2 z-10 relative py-5 bg-slate-300 !text-black mx-10 my-5 rounded-xl shadow-xl'>
          {/* <div className="bg-[url('/header.png')] bg-cover bg-no-repeat absolute top-0 blur-sm bottom-0 w-[55%] right-0 z-[-2]"></div> */}
          <div className='border-b-2 border-black py-5 flex justify-between items-center px-5 z-10'>
            <h1 className='font-bold text-2xl text-black'>My Profile</h1>
            <button className='px-3 py-2 rounded font-semibold bg-slate-200 hover:bg-slate-400 hover:text-white text-black duration-300' onClick={OnClickSeeMore}>See More</button>
          </div>
          <div className='py-5'>
            <div className="grid grid-cols-12 z-10">
              <div className="col-span-12 md:col-span-7">
                <table className='text-lg font-normal text-black'>
                  <tbody>
                  <tr>
                    <td className='w-[90px] md:w-[175px]'>Nama</td>
                    <td style={{ width: '20px' }}>:</td>
                    <td>Zidan Fikri Aditya</td>
                  </tr>
                  <tr>
                    <td>Umur</td>
                    <td>:</td>
                    <td>18 Tahun</td>
                  </tr>
                  <tr>
                    <td className='align-top'>Riwayat Pendidikan</td>
                    <td className='align-top'>:</td>
                    <td className='inline-block align-bottom'>
                      <table>
                        <tbody>
                        <tr>
                          <td>- SMKN 1 Jenangan</td>
                          <td>(2020 - 2023)</td>
                        </tr>
                        <tr>
                          <td>- SMPN 2 Kauman</td>
                          <td>(2017 - 2020)</td>
                        </tr>
                        <tr>
                          <td>- SDN 1 Bangunrejo</td>
                          <td>(2011 - 2017)</td>
                        </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td className='align-top'>Alamat</td>
                    <td className='align-top'>:</td>
                    <td>Dukuh Soko RT.001/RW.001, Desa Bangunrejo, Kec. Sukorejo, Kab. Ponorogo</td>
                  </tr>
                  <tr>
                    <td>TTL</td>
                    <td>:</td>
                    <td>Ponorogo, 24 Mei 2004</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div className="md:col-span-5">
                <div className='bg-[url("/my-profile.jpeg")] hidden md:block shadow-xl hover:scale-105 hover:duration-300 duration-300  h-full bg-[cover] w-[200px] rounded-lg mx-auto'>
                  
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className='md:px-12 px-10 '>
          <div className={`grid grid-cols-12 gap-5 ${!seeMore ? 'mt-[-300px] md:mt-[-300px] duration-300' : 'mt-0 duration-300'}`}>
            <div className={`col-span-12 md:col-span-6 bg-slate-400 p-5 rounded-xl shadow-xl ${!seeMore ? 'mt-[-0px] md:mt-0 duration-300' : 'mt-0 duration-300'}`}>
              <h1 className='text-2xl font-bold border-b-2 border-black pb-3 pl-3'>Prestations</h1>
              <ol className='list-decimal pl-5 mt-3 text-lg text-justify'>
                <li>Rank 6, East Java province level LKS.</li>
                <li>An outstanding student in the field of software engineering at Vocational High School 1st Jenangan Ponorogo.</li>
                <li>Sertification from BNSP (Badan Nasional Sertifikasi) & Telkom Digiup</li>
              </ol>
            </div>
            <div className={`col-span-12 md:col-span-6 bg-slate-400 p-5 rounded-xl shadow-xl ${!seeMore ? 'mt-[-300px] md:mt-0 duration-300' : 'mt-0 duration-300'}`}>
              <h1 className='text-2xl font-bold border-b-2 border-black pb-3 pl-3'>Skills & Technologies</h1>
              <ol className='list-decimal pl-5 mt-3 text-lg text-justify'>
                <li>Fullstack Developer (Laravel)</li>
                <li>Backend Developer (AdonisJS, Laravel)</li>
                <li>Frontend Developer (ReactJS, NextJS)</li>
                <li>Rest API</li>
                <li>Git</li>
              </ol>
            </div>
          </div>

          
        </div>
      </AppLayouts.Body>
    </AppLayouts>
  )
}
