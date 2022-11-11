const Profile = () => {

    return <div>
        <h3 className={"!py-0 !mt-0 mb-4"}>Personal information</h3>
        <div className={"flex justify-between"}>
            <div>
                <div>
                    <span className={"mr-4"}>Name:</span>
                    <span>Zhiwei Wang</span>
                </div>
                <div>
                    <span className={"mr-4"}>Email:</span>
                    <span>zhiweiwang2001@gmail.com</span>
                </div>
                <div>
                    <span className={"mr-4"}>Personal Web:</span>
                    <span>https://lifescience-docs.vercel.app</span>
                </div>
                <div>
                    <span className={"mr-4"}>Blog Site:</span>
                    <span>https://nightwalk2001.gitbook.io/summary/language</span>
                </div>
                <div>
                    <span>2019.9——(2023.6)</span>
                    <span className={"mx-4"}>Sun Yat-sen University</span>
                    <span>Biotechnology</span>
                </div>
                <div>
                    <span className={"mr-4"}>Highest GPA: 4.537</span>
                    <span>Current GPA: 2.614</span>
                </div>
            </div>
            <img src="/me.jpg" alt="" className={"w-36 h-48 m-0"}/>
        </div>
    </div>
}

export default Profile
