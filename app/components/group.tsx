import React, { useState, useEffect } from 'react';
import { StaticImageData } from 'next/image';
import Select from './Select';
import { validateTeam } from '@/src/utils/firestoreHelpers';
// import { input } from 'framer-motion/client';

interface Props {
  no: string;
  title: string;
  team: boolean;
  image: string | StaticImageData;
}

const Group = ({ no, title, image }: Props) => {
  const [teamName, setTeamName] = useState('');
  const [isTeamValid, setIsTeamValid] = useState(false);
  const [selectedOption, setSelectedOption] = useState<'create' | 'join'>('create'); // Track selected radio button

  // Use effect to validate the team name whenever it changes
  useEffect(() => {
    const validate = async () => {
      const isValid = await validateTeam(teamName);
      if (selectedOption === 'join') {
        setIsTeamValid(!!isValid); // Normal validation for "Join Team"
      } else {
        setIsTeamValid(!isValid); // Reverse validation for "Create Team"
      }
    };

    if (teamName) {
      validate();
    } else {
      setIsTeamValid(false); // Reset if team name is empty
    }
  }, [teamName, selectedOption]); // Depend on both teamName and selectedOption

  return (
    <div className="bg-black">
      <div className="my-6">
        <hr className="opacity-50 py-4" />
        <div className="flex gap-3">
          <h1 className="text-4xl text-white font-bold opacity-60">{no}</h1>
          <div>
            <Select
              title={title}
              image={image}
              selected={false}
              onClick={() => {}}
            />
            <div className="flex gap-3 text-xl my-8">
              <div className="flex items-center">
                <input
                  type="radio"
                  name={title}
                  id={`create-${title}`}
                  className="w-5 h-5 accent-[#2FFF60]"
                  checked={selectedOption === 'create'}
                  onChange={() => setSelectedOption('create')}
                />
                <label htmlFor={`create-${title}`} className="text-white mx-2">
                  Create Team
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name={title}
                  id={`join-${title}`}
                  className="w-5 h-5 accent-[#2FFF60]"
                  checked={selectedOption === 'join'}
                  onChange={() => setSelectedOption('join')}
                />
                <label htmlFor={`join-${title}`} className="text-white mx-2">
                  Join Team
                </label>
              </div>
            </div>
            <div className="flex gap-3 flex-col my-4">
              <input
                type="text"
                placeholder="Team Name"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                className={`p-2 rounded-md border-b-[5px] outline-none text-black ${
                  isTeamValid ? 'border-[#2FFF60]' : 'border-[#ff5050]'
                }`}
              />
              <p
                className={`${
                  isTeamValid ? 'text-[#2FFF60]' : 'text-[#ff5050]'
                } text-xl`}
              >
                {isTeamValid
                  ? 'Team Name Available'
                  : selectedOption === 'create'
                  ? 'Team Name Unavailable'
                  : 'Team Name Unavailable'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group;