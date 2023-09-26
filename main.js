
function addNumber() {
    const inputElement = document.querySelector('input');
    const value = inputElement.value;
    if (value === '') {
        return;
    }

    else if (value === '*111#') {


        const createContainer = document.createElement('div');
        createContainer.className = (' firstpage flex flex-col justify-center items-start pl-44 mx-auto rounded bg-gray-800 py-3 ')


        const fadlanDooroLacagta = document.createElement('h1');
        fadlanDooroLacagta.textContent = 'Fadlan Dooro Lacagta:';
        fadlanDooroLacagta.className = ('text-md  font-semibold ');

        const dollar = document.createElement('h6');
        dollar.textContent = '1. Dollar';
        dollar.className = ('pl-2')

        const shilling = document.createElement('h6');
        shilling.textContent = '2. Shilling';
        shilling.className = ('pl-2')

        createContainer.appendChild(fadlanDooroLacagta);
        createContainer.appendChild(dollar);
        createContainer.appendChild(shilling);


        const selectAreaContaner = document.querySelector('#selectAreaContainer');
        selectAreaContaner.appendChild(createContainer);
        inputElement.value = '';


    }
    else if (value === '2') {
        const previousContainer = document.querySelector('.firstpage');
        previousContainer.classList.add('hidden');
        const firstInput = document.querySelector('#firstInput');
        firstInput.classList.add('hidden');

        const firstButton = document.querySelector('.firstButton');
        firstButton.classList.add('hidden');

        const createContainers = document.createElement('div');
        createContainers.className = (' flex flex-col pl-44 justify-center items-start text-align mx-auto rounded bg-gray-800 py-3 secondpage ')



        const fadlandooro = document.createElement('h4');
        fadlandooro.textContent = 'Fadlan Dooro:';
        fadlandooro.className = ('text-md font-bold');

        const xisabtada = document.createElement('h6');
        xisabtada.textContent = '1. xisaabtaada';
        xisabtada.className = ('pl-1');

        const lacagDirid = document.createElement('h6');
        lacagDirid.textContent = '2. Lacag Dirid'
        lacagDirid.className = ('pl-1');

        const kuShubasho = document.createElement('h6')
        kuShubasho.textContent = '3. Ku Shubasho';
        kuShubasho.className = ('pl-1');

        const KuIibso = document.createElement('h6');
        KuIibso.textContent = '4. Ku iibso';
        KuIibso.className = ('pl-1');

        const LacagLaBixid = document.createElement('h6');
        LacagLaBixid.textContent = '5. Lacag Bixid';
        LacagLaBixid.className = ('pl-1');


        const dahabshiil = document.createElement('h6')
        dahabshiil.textContent = '6. Dahabshiil Bank';
        dahabshiil.className = ('pl-1');


        const ExchangeService = document.createElement('h6')
        ExchangeService.textContent = '7. Exchange Service';
        ExchangeService.className = ('pl-1');

        const secoundInput = document.createElement('input');

        secoundInput.className = (' thirdInput focus:ring-3 mb-5 text-2xl ring-2 text-center outline-none  w-96 px-4 py-2 text-gray-700 rounded-lg')


        const secondButton = document.createElement('button');
        secondButton.textContent = 'Somtel';
        secondButton.className = ('secondButton bg-green-400 text-gray-100 uppercase font-bold text-2xl px-10 py-3  rounded-full shadow-lg');
        createContainers.appendChild(fadlandooro);
        createContainers.appendChild(xisabtada);
        createContainers.appendChild(lacagDirid);
        createContainers.appendChild(kuShubasho);
        createContainers.appendChild(KuIibso);
        createContainers.appendChild(LacagLaBixid);
        createContainers.appendChild(dahabshiil);
        createContainers.appendChild(ExchangeService);

        const createContainersInputAndButton = document.createElement('div');
        createContainersInputAndButton.className = (' flex flex-col justify-right items-center mx-auto rounded  py-3 gap-2 secondInputAndButton')


        createContainersInputAndButton.appendChild(secoundInput);
        createContainersInputAndButton.appendChild(secondButton);

        secondButton.onclick = xisaabtadda;

        const selectAreaContaners = document.querySelector('#selectAreaContainer');
        selectAreaContaners.appendChild(createContainers);
        selectAreaContaners.appendChild(createContainersInputAndButton);

        inputElement.value = '';

    }

    else {
        alert('Adeegan lama heli karo');
        inputElement.value = '';

    }
}

function xisaabtadda() {
    const thirdInput = document.querySelector('.thirdInput');
    const values = thirdInput.value;
    if (values === '') {
        return;
    }
    else if (values === '1') {
        const LastContainer = document.querySelector('.secondpage');
        LastContainer.classList.add('hidden');
        const firstInputandButton = document.querySelector('.secondInputAndButton');
        firstInputandButton.classList.add('hidden');


        const createContainerXisabta = document.createElement('div');
        createContainerXisabta.className = (' flex flex-col  pl-44 text-align mx-auto rounded bg-gray-800 py-3 thirdPage ')



        const fadlandooro2 = document.createElement('h4');
        fadlandooro2.textContent = 'Fadlan Dooro:';
        fadlandooro2.className = ('text-md font-bold');

        const eegHadhaaga = document.createElement('h6');
        eegHadhaaga.textContent = '1. Eeg Hadhaaga';
        eegHadhaaga.className = ('pl-1');

        const TixraacKooban = document.createElement('h6');
        TixraacKooban.textContent = '2. Tixraac Kooban'
        TixraacKooban.className = ('pl-1');

        const BedelSirta = document.createElement('h6')
        BedelSirta.textContent = '3. Badal Lambarka Sirta ah';
        BedelSirta.className = ('pl-1');

        const badalLuqada = document.createElement('h6');
        badalLuqada.textContent = '4. Badal Luuqada';
        badalLuqada.className = ('pl-1');

        const LiiskaMagacyada = document.createElement('h6');
        LiiskaMagacyada.textContent = '5. Liiska Magacyada';
        LiiskaMagacyada.className = ('pl-1');

        const DaryeelkaMacaamiisha = document.createElement('h6')
        DaryeelkaMacaamiisha.textContent = '6. Daryeelka Macaamiisha';
        DaryeelkaMacaamiisha.className = ('pl-1');


        const fourInput = document.createElement('input');
        fourInput.className = (' fourInput focus:ring-3 mb-5 text-2xl ring-2 text-center outline-none  w-96 px-4 py-2 text-gray-700 rounded-lg')


        const fourButton = document.createElement('button');
        fourButton.textContent = 'Somtel';
        fourButton.className = ('fourbutton bg-green-400 text-gray-100 uppercase font-bold text-2xl px-10 py-3  rounded-full shadow-lg');
        createContainerXisabta.appendChild(fadlandooro2);
        createContainerXisabta.appendChild(eegHadhaaga);
        createContainerXisabta.appendChild(TixraacKooban);
        createContainerXisabta.appendChild(BedelSirta);
        createContainerXisabta.appendChild(badalLuqada);
        createContainerXisabta.appendChild(LiiskaMagacyada);
        createContainerXisabta.appendChild(DaryeelkaMacaamiisha);

        const createContainersInputAndButton2 = document.createElement('div');
        createContainersInputAndButton2.className = (' flex flex-col justify-right items-center mx-auto rounded  py-3 gap-2 inputAndButton2 ')


        createContainersInputAndButton2.appendChild(fourInput);
        createContainersInputAndButton2.appendChild(fourButton);

        const selectAreaContaners2 = document.querySelector('#selectAreaContainer');
        selectAreaContaners2.appendChild(createContainerXisabta);
        selectAreaContaners2.appendChild(createContainersInputAndButton2);
        fourButton.onclick = ItusHadhaaga;

    } else {

        alert('Adeegan Lama Heli karo');
        thirdInput.value = '';
    }

}

function ItusHadhaaga() {

    const fourinput = document.querySelector('.fourInput');
    const values = fourinput.value;
    if (values === '') {
        return;
    }
    else if (values === '1') {

        const LastContainer2 = document.querySelector('.thirdPage');
        LastContainer2.classList.add('hidden');
        const firstInputandButton2 = document.querySelector('.inputAndButton2');
        firstInputandButton2.classList.add('hidden');

        const GalintaPinka = document.createElement('div');
        GalintaPinka.className = (' flex flex-col  items-center justify-center shadhow text-align mx-auto rounded bg-gray-800 py-3 fourPage ')

        const galiPin = document.createElement('h5')
        galiPin.textContent = 'Gali Lambarka Sirta ah Si aad Hadhaagaaga u eegto';


        GalintaPinka.appendChild(galiPin);

        const createContainersInputAndButton3 = document.createElement('div');
        createContainersInputAndButton3.className = (' flex flex-col justify-right items-center mx-auto rounded  py-3 gap-2 inputAndButton3 ')


        const fiveInput = document.createElement('input');
        fiveInput.className = (' fiveInput focus:ring-3 mb-5 text-2xl ring-2 text-center outline-none  w-96 px-4 py-2 text-gray-700 rounded-lg')
        fiveInput.type = 'password';


        const fiveButton = document.createElement('button');
        fiveButton.textContent = 'Somtel';
        fiveButton.className = ('fivebutton bg-green-400 text-gray-100 uppercase font-bold text-2xl px-10 py-3  rounded-full shadow-lg');

        createContainersInputAndButton3.appendChild(fiveInput);
        createContainersInputAndButton3.appendChild(fiveButton);
        const selectAreaContaners3 = document.querySelector('#selectAreaContainer');
        selectAreaContaners3.appendChild(GalintaPinka);
        selectAreaContaners3.appendChild(createContainersInputAndButton3);

        fiveButton.onclick = hubintaPinka;
    }
    else {
        alert('Adeegan Lama Heli karo');
        fourinput.value = '';
    }

}


function hubintaPinka() {
    const fiveInput = document.querySelector('.fiveInput');
    const values = fiveInput.value;
    if (values === '') {
        return;
    }
    else if (values === '0000') {
        alert('Hadhaagaagu waa: 900,000 sl');
        fiveInput.value = '';

        const pagefours = document.querySelector('.fourPage');
        pagefours.classList.add('hidden');
        fiveButton.onclick = () => { return };
    }
    else {

        alert('Waa khalad numberka Sirta ah ee aad galisay fadlan hubi')
        fiveInput.value = '';
        fiveButton.onclick = () => { return };
    }

}