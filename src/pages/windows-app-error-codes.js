const windowsAppErrorCodes = () => {
    return (
        <>
            <div className="container mt-5 py-5">
                <h1 className="fw-bold text-center c-fs-2">Windows app error codes</h1>
                <ul className="mt-4">
                    <li className="description" id="1">
                        <h2 className="fs-5">Installation canceled by user</h2>
                        <p>This return code typically indicates that the installation was canceled by the user. The setup may have prompted the user to confirm cancellation or may have been terminated by the user during the installation process.</p>
                    </li>
                    <li className="description" id="2">
                        <h2 className="fs-5">Application already exists</h2>
                        <p>This return code indicates that the application being installed already exists on the system. It may occur when attempting to install a program that is already present, and the installer detects this condition as an error.</p>

                    </li>
                    <li className="description" id="3">
                        <h2 className="fs-5">Installation already in progress</h2>
                        <p>This return code indicates that another installation process is already in progress on the system. It usually occurs when attempting to install multiple applications simultaneously or when another installer is currently active.</p>
                    </li>
                    <li className="description" id="4">
                        <h2 className="fs-5">Disk space is full</h2>
                        <p>This return code indicates that the installation process cannot proceed due to insufficient disk space on the target drive. The installer checks available disk space and returns this code if the required space is not available.</p>
                    </li>
                    <li className="description" id="5">
                        <h2 className="fs-5">Reboot required</h2>
                        <p>This return code can also indicate that a reboot is required to complete the installation process. After certain installations or updates, the system may need to be restarted to apply changes successfully.</p>
                    </li>
                    <li className="description" id="6">
                        <h2 className="fs-5">Network failure</h2>
                        <p>This return code indicates a network-related failure during the installation process. It may occur when the installer cannot access necessary files or resources from a network location due to connectivity issues.</p>
                    </li>
                    <li className="description" id="7">
                        <h2 className="fs-5">Package rejected during installation</h2>
                        <p> This return code indicates that the installation package (e.g., MSI file) was rejected or found to be invalid during the installation process. The specific return code may vary based on the installer software being used.</p>
                    </li>
                    <li className="description" id="8">
                        <h2 className="fs-5">Installation successful</h2>
                        <p>This return code typically indicates that the installation process was completed successfully without encountering any errors or issues. It is commonly used to signify a successful installation.</p>
                    </li>
                </ul>
            </div>
        </>
    );
};
export default windowsAppErrorCodes;