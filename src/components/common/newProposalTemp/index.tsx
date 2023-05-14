import { useContext, useState } from "react";
import { AlertIcon, ChatIcon, CodeIcon, DislikeIcon, LikeIcon } from "../../../assets/svgs";
import CustomButton from "../button";
import DropdownInput from "../input/DropdownInput";
import TextAreaInput from "../input/TextAreaInput";
import TextInput from "../input/TextInput";
import { UserContext } from "../../../UserContext";
import { IContextType, IProposal } from "../../../types";
import useLocalStorage from "../../../hooks/useLocalStorage";


const NewProposalTemp = ({ dao }: { dao: string }) => {
  const [desc, setDesc] = useState<string>('');
  const [target, setTarget] = useState<string>('');
  const [value, setValue] = useState<string>('');
  const [proposalType, setProposalType] = useState<string>('');
  const { getLocalStorage } = useLocalStorage();
  const { account, createProposal } = useContext(UserContext) as IContextType;

  const handlePropose = async () => {
    const proposal: IProposal = { proposalType, description: desc, target, value: Number(value) * 1e18 };
    try {
      await createProposal(dao, proposal);
      window.alert("Proposal created successfully");
      window.location.reload();
    } catch (error: any) {
      window.alert(error.message)
    }
  };

  return (
    <div className="w-full px-14">
      <div className="mb-16 py-3">
        <div className="w-full">
          <p className="text-sm text-grey justify-end flex my-1">
            {AlertIcon}
          </p>
          <div
            className="rounded-lg h-fit shadow-card"
          >
            <div className="flex">
              <div className="w-20 bg-bg flex">
                <div className="mx-auto mt-4">{CodeIcon}</div>
              </div>
              <div className="px-6 py-3 w-full">
                <DropdownInput label="Proposal type: Transfer/Add bounty" handleOnchange={({ value }) => setProposalType(value)} />
                <div className="mt-4">
                  <p className="text-sm text-grey">Proposer</p>
                  <p className="font-gilroyBold">{account.address}</p>
                </div >
                {/* Description */}
                < div className="mt-4" >
                  <TextAreaInput label="Description:" placeholder="Enter the description of this proposal" onChange={(e) => setDesc(e.target.value)} value={desc} />
                </div >
                < div className="mt-4" >
                  <TextInput label="Target:" placeholder="Enter the target address" onChange={(e) => setTarget(e.target.value)} value={target} />
                </div >

                <div className="flex justify-between">
                  <TextInput label="Amount" isCompulsory placeholder="00.0000" type="number" onChange={({ target }) => setValue(target.value)} value={value} />
                  <div />
                  <div className="flex mt-6 items-center justify-between text-right">
                    <div className="flex items-center border h-10 w-16 rounded-full border-tertiary">
                      {LikeIcon}
                    </div>
                    <div className="flex items-center border h-10 w-16 rounded-full border-tertiary mx-4">
                      {DislikeIcon}
                    </div>

                    <div className="flex items-center w-full">
                      <div className="flex items-center border h-10 w-10 rounded-full border-tertiary shadow-card bg-white hover:bg-light trans">
                        {ChatIcon}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex w-full my-5 justify-end">
                  <CustomButton width="w-72" disabled={!desc || !value || !proposalType} handleClick={handlePropose}>Propose</CustomButton>
                </div>
              </div >
            </div >
          </div >
        </div >
      </div >
    </div >
  );
};

export default NewProposalTemp;