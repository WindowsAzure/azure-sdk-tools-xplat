# Azure Batch data movement using application templates
This template shows how to create a parametric sweep job using an *application template* to separate the logic of processing from administration and management. This sample also demonstrates how to use `ResourceFiles` and `OutputFiles` to automatically download files to the virtual machine and to upload the output after the task completes.

With an application template, the processing steps required for the job are defined in a separate file - see `movement-template.json` - which is appropriately parameterized. The job itself references the template, supplies any required parameter values and specifies the pool on which the job is to run.

## Prerequisites
You must have an Azure Batch account set up with a linked Azure Storage account. See [Create an Azure Batch account using the Azure portal](https://docs.microsoft.com/azure/batch/batch-account-create-portal) for details.

## Upload files
To upload a folder of files with numerically increasing names with `input` prefix (i.e. `input1.txt`, `input2.txt`, `input3.txt`, run command this command to upload files:
``` bash
azure batch file upload <path> <group>
```
| Parameter        | Description                                                                                                                                      |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| <path>           | File specification of the files to upload. Relative paths are resolved relative to the current directory.                                        |
| <group>          | Name for the file group that will be created in blob storage. The file group will have the prefix `fgrp-` followed by the prefix specified here. |

For more information see the documentation on [input files](../../../inputFiles.md).

## Preparation
Fill out the parameter placeholders in `movement-job.json`:

| Parameter        | Description                                                                            |
| ---------------- | -------------------------------------------------------------------------------------- |
| testData         | The same prefix as you used for `<group>` when you uploaded files in the previous step |
| taskStart        | The index number of your first file (i.e. 1 for `input1.txt`).                         |
| taskEnd          | The index number of your last file (i.e. 3 for `input3.txt`)                           |
| outputStorageUrl | A valid (non-expired) writable SAS key                                                 |

To customize the job id or any of the details of the autopool, modify the appropriate details in `movementjob.json`. These are not parameterized because they are not specified in the template file. 

## Run commands
To create your job with some tasks, run the following command:
``` bash
azure batch job create --json-file movement-job.json` 
```

This job uses an autopool which will be automatically deleted once the job finishes. 

## Monitor the job

You can use this command to monitor the tasks in the job and their progress:
``` bash
azure batch task list --job-id <jobid>`
```
You can also use the [Azure portal](https://portal.azure.com) or [Batch Explorer](https://github.com/Azure/azure-batch-samples/tree/master/CSharp/BatchExplorer) for monitoring.

## Troubleshooting

### "One of the specified Azure Blob(s) is not found"

If the preparation tasks for the job fail with the error *"One of the specified Azure Blob(s) is not found"*, verify that the resource file URLs specified for the file egress scripts are still correct (these urls are dependent on the branch structure in the git repo for the XPlat CLI and may change without warning).

To check these URLs with the Azure Batch Portal, select the *Preparation Tasks* details page for your job then click the link next to *Resource Files*.  Another pane will open showing all the associated resource files and their URLs. Check that none of these return a 404 (forbidden) result in your browser.
 