/**
 * 
 *  Document     : scene.js
 *  Created on   : 13 February, 2017, 4:45:25 PM
 *  Author       : Ujjal Dey
 *  Organization : IIT Kharagpur
 *  
 */
var oldham = {
    scene: null,
    camera: null,
    container: null,
    stats: null,
    controls: null,
    renderer: null,
    CONTAINER_WIDTH: null,
    CONTAINER_HEIGHT: null,
    //link2Mesh: null,

    init: function () {

// create main scene
        this.scene = new THREE.Scene();
        this.container = document.getElementById("canvas3d-view");
        this.scene.position.set(-50, 80, 0);
        this.CONTAINER_WIDTH = this.container.offsetWidth;
        this.CONTAINER_HEIGHT = this.container.offsetHeight;

//  renderer
        this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: false});
        this.renderer.setSize(this.CONTAINER_WIDTH, this.CONTAINER_HEIGHT);
        this.renderer.setClearColor(0x000000, 1); // Set the background color of the canvas to black
        this.renderer.shadowMapEnabled = true;
        this.renderer.shadowMapSoft = true;
        this.container.appendChild(this.renderer.domElement);

// camera
        var VIEW_ANGLE = 45, ASPECT = this.CONTAINER_WIDTH / this.CONTAINER_HEIGHT, NEAR = 1, FAR = 10000;
        this.camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
        //this.camera.position.z = 500;
        this.camera.position.set(0, 0, -2200);   //
        //this.camera.lookAt(new THREE.Vector3(0, 0, 0));
        this.camera.lookAt(this.scene.position);
//        this.scene.add(this.camera);
//        
        var dirLight = new THREE.DirectionalLight(0xffffff, 1);
        dirLight.position.set(0, 150, 400);
        this.scene.add(dirLight);

        var dirLight1 = new THREE.DirectionalLight(0xffffff, 1);
        dirLight1.position.set(0, 150, -400);
        this.scene.add(dirLight1);
        // And some sort of controls to move around
        // We'll use one of THREE's provided control classes for simplicity
        this.controls = new THREE.TrackballControls(this.camera);
        this.controls.rotateSpeed = 5.0;
        this.controls.zoomSpeed = 1.2;
        this.controls.panSpeed = 0.8;
        this.controls.noZoom = false;
        this.controls.noPan = false;
        this.controls.staticMoving = true;
        this.controls.dynamicDampingFactor = 0.3;
        this.controls.keys = [65, 83, 68];
        this.controls.enabled = false;
        // this.controls.addEventListener('change', render);
// Stats preparing
//        this.stats = new Stats();
//        this.stats.domElement.style.position = 'absolute';
//        this.stats.domElement.style.top = '60px';
//        this.container.appendChild(this.stats.domElement);



// create scene

// Add axes, The X axis is red. The Y axis is green. The Z axis is blue.
        axes = buildAxes(200);
        //axes.position = mesh.position;
        this.scene.add(axes);

        Cylinder1 = new THREE.Mesh(new THREE.CylinderGeometry(25, 25, 700, 100), new THREE.MeshNormalMaterial());
        Cylinder1.rotation.x = Math.PI / 2;
        Cylinder1.position.set(0, 0, 0);
        //oldham.scene.add(Cylinder1);

        Box = new THREE.Mesh(new THREE.BoxGeometry(1200, 1500, 50, 100), new THREE.MeshBasicMaterial({color: 0x663300}));
        Box.position.set(0, 0, -60)
        oldham.scene.add(Box);

        Box1 = new THREE.Mesh(new THREE.BoxGeometry(200, 100, 250, 100), new THREE.MeshPhongMaterial({wireframe: false, color: 0x19aa99}));
        Box1.position.set(0, 320, -200)
        //Box1.rotation.x=Math.PI/6;
        //Box1.rotation.y=Math.PI/8;
        oldham.scene.add(Box1);
        Box2 = new THREE.Mesh(new THREE.BoxGeometry(200, 100, 250, 100), new THREE.MeshPhongMaterial({wireframe: false, color: 0x19aa99}));
        Box2.position.set(0, 0, -200)
        oldham.scene.add(Box2);

        this.loader = new THREE.STLLoader();
        this.loader.load('vid16/cam.stl', function (geometry) {
            geometry.applyMatrix(new THREE.Matrix4().makeTranslation(-22, 26, -200));
            // geometry.applyMatrix(new THREE.Matrix4().makerotation(0, 0, Math.PI / 2));
            // link1material = new THREE.MeshPhongMaterial({wireframe: false, color: 0xAAAAAA});
            link1mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({wireframe: false, color: 0xAAAAAA}));
            link1mesh.rotation.x = -Math.PI;
            link1mesh.position.set(0, -440, 0);
            oldham.scene.add(link1mesh);

        });
        Sphere = new THREE.Mesh(new THREE.SphereGeometry(30, 30, 500), new THREE.MeshPhongMaterial({wireframe: false, color: 0x2194ce}));
        Sphere.position.set(0, -220, -270);//y 150
        oldham.scene.add(Sphere);
        Cylinder2 = new THREE.Mesh(new THREE.CylinderGeometry(30, 30, 800, 100), new THREE.MeshPhongMaterial({wireframe: false, color: 0x2194ce}));
        // Cylinder2.rotation.x = Math.PI / 2;
        Cylinder2.position.set(0, 400, 0);//y 150
        Sphere.add(Cylinder2);


        this.container.addEventListener('mouseover', onContainerMouseOver, false);
        this.container.addEventListener('mouseout', onContainerMouseOut, false);

//        document.addEventListener('mousemove', onContainerMouseMove, false);
//        document.addEventListener('mousedown', onContainerMouseDown, false);
//        document.addEventListener('keydown', onContainerKeyDown, false);
//        document.addEventListener('keyup', onContainerKeyUp, false);
//        document.addEventListener('touchstart', onDocumentTouchStart, false);
//        document.addEventListener('touchmove', onDocumentTouchMove, false);
    }
};

function onContainerMouseOver() {
    oldham.controls.enabled = true;
}
function onContainerMouseOut() {
    oldham.controls.enabled = false;
}
// Animate the scene
function animate() {
    // Cylinder1.rotation.y += 0.2 / 2;
    //Cylinder2.rotation.z += 0.2;
    requestAnimationFrame(animate);
    oldham.renderer.render(oldham.scene, oldham.camera);
    update();
    render();
    //cameraControls.update();

}

// Update controls and stats
function update() {
//    AXISCubeScene.controls.update(AXISCubeScene.clock.getDelta());
    oldham.controls.update();
    // oldham.stats.update();
}
// Render the scene
function render() {
    if (oldham.renderer) {
        oldham.renderer.render(oldham.scene, oldham.camera);
        //link2mesh.rotation.z = +10;
    }
}


