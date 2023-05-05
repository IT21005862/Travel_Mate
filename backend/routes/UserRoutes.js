const router = require('express').Router();
const User = require('../models/User');

//signup

router.post('/signup', async (req, res) => {
  const { name,Tel, bdate, address, email, password } = req.body;

  try {
    const user = await User.create({ name,Tel, bdate, address, email, password });
    res.json(user);
  } catch (e) {
    if (e.code === 11000) return res.status(400).send('Email already exists');
    res.status(400).send(e.message)
  }
})

//login

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    res.json(user)
  } catch (e) {
    res.status(400).send(e.message)
  }
})

//get all user

router.get('/', async (req, res) => {
  try {
    const users = await User.find({ isAdmin: false });
    res.json(users);
  } catch (e) {
    res.status(400).send(e.message);
  }
})
module.exports = router;

// Update isApproved field to true for a specific dest 
router.put('/approveDest/:id', async (req, res) => {
  try {
    const dest = await User.findById(req.params.id);
    if (!dest) {
      return res.status(404).json({ message: 'Destination not found' });
    }
    dest.isDest = true;
    await dest.save();
    res.json(dest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update isApproved field to false for a specific dest 
router.put('/rejectDest/:id', async (req, res) => {
  try {
    const dest = await User.findById(req.params.id);
    if (!dest) {
      return res.status(404).json({ message: 'Destination not found' });
    }
    dest.isDest = false;
    await dest.save();
    res.json(dest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update isApproved field to true for a specific travel 
router.put('/approvetrav/:id', async (req, res) => {
  try {
    const dest = await User.findById(req.params.id);
    if (!dest) {
      return res.status(404).json({ message: 'Transporter not found' });
    }
    dest.isTravel = true;
    await dest.save();
    res.json(dest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update isApproved field to false for a specific travel 
router.put('/rejecttrav/:id', async (req, res) => {
  try {
    const dest = await User.findById(req.params.id);
    if (!dest) {
      return res.status(404).json({ message: 'Transporter not found' });
    }
    dest.isTravel = false;
    await dest.save();
    res.json(dest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update isApproved field to true for a specific Hotel 
router.put('/approvehotel/:id', async (req, res) => {
  try {
    const dest = await User.findById(req.params.id);
    if (!dest) {
      return res.status(404).json({ message: 'hotel not found' });
    }
    dest.isHotel = true;
    await dest.save();
    res.json(dest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update isApproved field to false for a specific Hotel 
router.put('/rejecthotel/:id', async (req, res) => {
  try {
    const dest = await User.findById(req.params.id);
    if (!dest) {
      return res.status(404).json({ message: 'hotel not found' });
    }
    dest.isHotel = false;
    await dest.save();
    res.json(dest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});


// Update isApproved field to true for a specific seller 
router.put('/approveseller/:id', async (req, res) => {
  try {
    const dest = await User.findById(req.params.id);
    if (!dest) {
      return res.status(404).json({ message: 'seller not found' });
    }
    dest.isSeller = true;
    await dest.save();
    res.json(dest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update isApproved field to false for a specific seller 
router.put('/rejectseller/:id', async (req, res) => {
  try {
    const dest = await User.findById(req.params.id);
    if (!dest) {
      return res.status(404).json({ message: 'seller not found' });
    }
    dest.isSeller = false;
    await dest.save();
    res.json(dest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update isApproved field to true
router.put('/approve/:id', async (req, res) => {
  try {
    const dest = await User.findById(req.params.id);
    if (!dest) {
      return res.status(404).json({ message: 'seller not found' });
    }
    dest.isApproved = true;
    await dest.save();
    res.json(dest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update isApproved field to false 
router.put('/reject/:id', async (req, res) => {
  try {
    const dest = await User.findById(req.params.id);
    if (!dest) {
      return res.status(404).json({ message: 'seller not found' });
    }
    dest.isApproved = false;
    await dest.save();
    res.json(dest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

//get a user

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const users = await User.findById(id);
    res.json(users);
  } catch (e) {
    res.status(400).send(e.message);
  }
})
module.exports = router;

