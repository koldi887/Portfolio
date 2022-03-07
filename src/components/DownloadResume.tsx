import React from 'react';
import FileSaver from "file-saver";
import {Button} from "@mui/material";

const DownloadResume = () => {
    const downloadResumeHandler = () => {
        FileSaver.saveAs(
            process.env.PUBLIC_URL + "https://cdn.sanity.io/files/6j6qwla4/production/fec1a70f1fab15c597b89667e4c93485ecbcf9a9.pdf",
            "Dmitri_Resume.pdf");
    }

    return (
        <Button
            variant="outlined"
            onClick={downloadResumeHandler}
            size={'small'}
        >
            My resume
        </Button>
    );
};

export default DownloadResume;