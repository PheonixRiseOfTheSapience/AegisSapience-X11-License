function showTab(tabId) {
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
}

document.addEventListener("DOMContentLoaded", function () {
    fetch('./LICENSE')
        .then(response => response.text())
        .then(text => {
            document.getElementById('licenseContent').textContent = text;
        })
        .catch(error => {
            document.getElementById('licenseContent').textContent = 'Failed to load license content.';
            console.error('Error fetching LICENSE:', error);
    });
    
    // Update license dynamically on form submission
    document.getElementById('licenseForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const altName = document.getElementById('altName').value + " License";
        const ownerName = document.getElementById('authorName').value;
        const githubName = document.getElementById('githubName').value;
        const contactEmail = document.getElementById('contactEmail').value;
        const copilotOptOut = document.getElementById('copilotOptOut').value;

        // Get current date and time
        const currentDate = new Date();
        const formattedDate = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
        const formattedTime = currentDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
        const fullDateTime = `${formattedDate} at ${formattedTime}`;

        const licenseTemplate = `
            ${altName}
            Author: ${ownerName}

            Permission is hereby granted, free of charge, to any person obtaining a copy of this license and associated documentation files (the "License") to use, modify, and distribute this License or derivatives thereof, subject to the following conditions:

            Definitions
            Licensed Directory: Refers to the folder or directory in which this License is located, including all files, folders, and subdirectories contained within it.
            Directory: A storage structure that may contain files and/or additional directories (subdirectories).
            Subdirectory: A directory located within another directory. Subdirectories may contain additional files, folders, and subdirectories.
            Source Code: Refers to the human-readable instructions and development artifacts used to create software.
            Software: Refers to the executable programs and applications derived from source code.
            Services: Refers to the functionalities provided by software and associated documentation, including but not limited to web services, APIs, and cloud-based solutions.
            Materials: Refers to any content, including but not limited to source code, binaries, documentation, and related assets.
            Documentation: Refers to the written or digital materials that explain and provide instructions for the use of the software and services.
            Design Patterns: Refers to reusable solutions to common problems in software design, including but not limited to Singleton, Factory Method, Observer, and Strategy patterns.
            File: Refers to any digital data, including but not limited to text, ASCII characters, numbers, binary data, images, videos, and any other form of digital content stored in any format.

            1. Attribution and Licensing Terms
            1.1. The above copyright notice, identifying ${altName} (${ownerName}) as the copyright holder, and this permission notice shall be included in all copies or substantial portions of the Materials.
            1.2. Clear and prominent attribution must be given to ${altName} (${ownerName}) in all distributed or published works derived from the Materials.  This includes, but is not limited to, visible credit in documentation, user interfaces, instructional materials, and publicly visible outputs.
            1.3. This License must be included in all derivative works or redistributed versions of the Materials, ensuring the terms remain binding.

            2. Ownership of Alternative Licenses
            2.1. Alternative Licenses created from this License must explicitly state the ownership of the alternative version, identifying the alternative creator(s) or entity/entities as the owner(s).
            2.2. The ${altName} (${ownerName}) retains no ownership, control, or responsibility over any Alternative Licenses.
            2.3. Alternative Licenses must include a clear disclaimer that ${altName} (${ownerName}) is not the owner or legal representative of the Alternative License.

            3. Updating and Attribution for Alternative Licenses
            3.1. The alternative creator(s) of the Alternative License must ensure that all relevant contact and attribution information is accurate and properly updated in the License text.
            3.2. Any failure to include accurate attribution, ownership, and contact details may invalidate the legality of the Alternative License.
            3.3. Attribution to the original AegisSapience X11 License must be preserved, but ownership credit for the alternative version must not imply ownership or endorsement by ${altName} (${ownerName}

            4. Prohibition on Misrepresentation
            4.1. Alternative Licenses must not misrepresent their relationship to the ${altName} or its author.
            4.2. Alternative Licenses must not create false impressions of endorsement, shared ownership, or legal connection with ${altName} (${ownerName}).

            5. Prohibition on Exclusive Claims for Alternative Licenses
            5.1. No individual or organization may patent, trademark, or otherwise restrict the use of this License or any Alternative Licenses derived from it.
            5.2. Alternative Licenses must not impose exclusive claims over concepts, terms, or conditions present in this License.

            6. Binding Nature and Protections Against Misuse
            6.1. This License and any Alternative Licenses are subject to the protections outlined in Sections 4, 5, and 6 regarding circumvention, reverse engineering, or misuse.
            6.2. Any violation of these protections invalidates rights under the original AegisSapience X11 License and any Alternative Licenses derived from it.

            7. Warranty Disclaimer and Liability Limitation
            THE LICENSE IS PROVIDED "AS IS," WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT.

            8. Jurisdiction and Governing Law
            8.1. This License shall be governed by and construed under the laws of the State of North Carolina, USA.
            8.2. Disputes shall be subject to the exclusive jurisdiction of the courts of the State of North Carolina, USA.

            9. Repository Reference
            9.1. This License, and any changes to it, can be found at the following repository: ${githubName}/${altName}
            9.2. All modifications and updates to this License will be documented and published in the repository mentioned above.

            10. Protection of File Directory, Subdirectories, Source Code, Software, Services, Materials, Documentation, and Design Patterns
            10.1. This License applies to the entire file directory and its subdirectories, including all files and folders within the repository.
            10.2. This License covers both private and public repositories, ensuring that the terms apply regardless of the repository's visibility.
            10.3. The term "file directory" includes any file system on any computer machine.
            10.4. Any attempt to remove, update, or change this License is a violation of the License itself.
            10.5. Reverse engineering or circumvention of this License via any terms of use, privacy policy, license, websites, or services is strictly prohibited.
            10.6. Websites, services, terms of use, and privacy policies must not be used to circumvent, reverse engineer, or otherwise violate this License.
            10.7. Design patterns included in the materials are protected under this License and must not be used to claim exclusive rights.
            10.8. Modifying file contents in a way that changes its checksum, including but not limited to adding null characters, will be considered an attempt to circumvent the License and is strictly prohibited.
            10.9. The use of checksums to verify the contents of a file is not recognized as valid under this License due to the potential for circumvention by modifying file contents with a simple injected null value to change checksums.

            11. Unauthorized Copyrighting, Patenting, or Trademarking
            11.1. No person or entity is allowed to copyright, patent, or trademark this License or any derivative works thereof without explicit written consent from ${altName} (${ownerName}).
            11.2. Any unauthorized attempts to claim ownership through copyright, patents, or trademarks will render this License null and void for the offending party.

            12. Profit Sharing
            12.1. Profits derived from commercial and non-commercial uses of this License or its derivatives must be shared equally (50%) with the original creator, ${altName} (${ownerName}).
            12.2. Non-profit organizations using this License or its derivatives must allocate 5% of any profits made to ${altName} (${ownerName}).
            12.3. Additionally, 1% of all profits derived from the use of this License, its derivatives, or associated services must be allocated to GitHub for the usage of Copilot.
            12.4. Additionally, section 12.3 can be opted out by agreeing here: ${copilotOptOut === 'agree' ? 'Opted Out' : 'Not Opted Out'}
            12.5. If section 12.4 is agreed to, then section 12.3 shall be null and void for this License.
            12.6. No individual or organization may restrict or prevent the availability of this License for the purpose of profit sharing. Doing so will be considered a violation of this agreement.

            13. Audit and Enforcement
            13.1. ${altName} (${ownerName}) reserves the right to audit repository postings and commercial activities to verify compliance with this License. Non-compliance may result in immediate revocation of License rights and/or legal action.
            13.2. Repository maintainers and users found to be in violation of this License will be held liable under intellectual property laws.

            14. Binding Agreement and Automatic Ownership Rights
            14.1. This License constitutes a legally binding agreement between ${altName} (${ownerName}) and the Licensee.
            14.2. Any attempt to file patents, trademarks, or copyrights for the Materials or derivatives without complying with this License will automatically result in the Licensor being granted 100% ownership of the rights.
            14.3. Removal, alteration, or obfuscation of this License from the Licensed Directory constitutes a direct violation of the License.

            Effective Date: ${fullDateTime}
            Updated as of: ${fullDateTime}
        `;

        // Display the generated license
        document.getElementById('generatedLicense').textContent = licenseTemplate;
    }); // Closing brace for the event listener
});
