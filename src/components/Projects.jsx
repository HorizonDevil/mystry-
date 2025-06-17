import { Box, Typography, Grid, Card, CardContent, CardActions, Button, Chip, useTheme, Container, Avatar, Tabs, Tab, Paper, Divider, IconButton, Tooltip, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, ShoppingCart, Sensors, Description, GitHub, Visibility, Close, ArrowBack, ArrowForward, Star, StarBorder, Share, DataArray } from '@mui/icons-material';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const projectCategories = [
  { id: 'all', label: 'All Research Work' },
  { id: 'biotech', label: 'Biotechnology Research' },
  { id: 'bioinformatics', label: 'Bioinformatics' },
  { id: 'cancer_research', label: 'Cancer Research' },
  { id: 'biochemical', label: 'Biochemical Profiling' }
];

const projects = [
  {
    id: 1,
    title: 'Intern, Department of Microbiology',
    date: 'April 2025 – Present',
    description: 'Engaged in biochemical characterization of tea metabolites and studied the therapeutic potential of Indian beverages like tea and coffee.',
    longDescription: 'This research project involves performing DNA and protein extraction from different tea leaf varieties, along with protein estimation. The project uses HPLC, Rheometer, FTIR, and Fluorimeter for comprehensive biochemical profiling. The focus is also on evaluating antimicrobial activity of tea extracts against selected microbial strains.',
    technologies: ['HPLC', 'Rheometer', 'FTIR', 'Fluorimeter', 'Tea Extracts'],
    category: 'biochemical',
    links: {
      demo: '#',
      github: '#'
    },
    accentColor: '#FF6B6B',
    images: ['/project1-1.jpg', '/project1-2.jpg']
  },
  {
    id: 2,
    title: 'Dissertation Trainee, Department of Microbiology',
    date: 'January 2025 – May 2025',
    description: 'Designed and implemented a bioinformatics pipeline to inhibitors for Mycobacterium tuberculosis and Klebsiella pneumoniae.',
    longDescription: 'This project involved performing comparative molecular docking analysis to identify potential inhibitors for Mycobacterium tuberculosis and Klebsiella pneumoniae. Integrated literature mining with computational screening to shortlist promising lead compounds for further testing.',
    technologies: ['Bioinformatics', 'Molecular Docking', 'Computational Screening'],
    category: 'bioinformatics',
    links: {
      demo: '#',
      github: '#'
    },
    accentColor: '#4ECDC4',
    images: ['/project2-1.jpg', '/project2-2.jpg']
  },
  {
    id: 3,
    title: 'Intern, TiMBR-TTCRC',
    date: 'January 2025 – March 2025',
    description: 'Interned under TIMBR program, handling biospecimens including plasma, DNA, RNA, and cryopreserved samples of Pediatric and Adult Leukemia samples at Tata Medical Center.',
    longDescription: 'Worked with the TiMBR program at Tata Medical Center, managing biospecimens including plasma, DNA, RNA, and cryopreserved samples from Pediatric and Adult Leukemia patients. Coordinated biorepository workflows and documented downstream procedures.',
    technologies: ['Biorepository Management', 'LabVantage', 'Leukemia Research'],
    category: 'cancer_research',
    links: {
      demo: '#',
      github: '#'
    },
    accentColor: '#FFD166',
    images: ['/project3-1.jpg']
  },
  {
    id: 4,
    title: 'Short Term Intern/Trainee',
    date: 'July 2025 – September 2025',
    description: 'Investigated anti-cancer effects of Lepidium sativum seed extracts on MDA-MB-231 breast cancer cells.',
    longDescription: 'Conducted cell viability and anti-proliferative assays in an ex vivo 3D culture model to study the anti-cancer effects of Lepidium sativum seed extracts on MDA-MB-231 breast cancer cells. Evaluated sequentially extracted bioactive compounds to assess therapeutic potential.',
    technologies: ['Cancer Research', 'Cell Viability Assays', '3D Culture Model'],
    category: 'cancer_research',
    links: {
      demo: '#',
      github: '#'
    },
    accentColor: '#06D6A0',
    images: ['/project4-1.jpg', '/project4-2.jpg', '/project4-3.jpg']
  }
];

const ProjectCard = ({ project, theme, openModal }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => openModal(project)}
      style={{ cursor: 'pointer', height: '100%' }}
    >
      <Card 
        sx={{ 
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '16px',
          bgcolor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#fff',
          boxShadow: isHovered ? theme.shadows[8] : theme.shadows[4],
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
          '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: project.accentColor,
            zIndex: 1
          }
        }}
      >
        <Box sx={{ position: 'absolute', top: 12, right: 12, zIndex: 2 }}>
          <IconButton 
            size="small" 
            onClick={(e) => {
              e.stopPropagation();
              setIsFavorite(!isFavorite);
            }}
            sx={{
              color: isFavorite ? theme.palette.warning.main : theme.palette.text.secondary,
              backgroundColor: theme.palette.mode === 'dark' ? 'rgba(30,30,30,0.7)' : 'rgba(255,255,255,0.7)',
              backdropFilter: 'blur(10px)',
              '&:hover': {
                color: theme.palette.warning.main,
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(30,30,30,0.9)' : 'rgba(255,255,255,0.9)'
              }
            }}
          >
            {isFavorite ? <Star /> : <StarBorder />}
          </IconButton>
        </Box>

        <CardContent sx={{ 
          flexGrow: 1,
          pt: 4,
          pb: 2,
          px: 3
        }}>
          <Box sx={{ 
            display: 'flex',
            alignItems: 'center',
            mb: 3,
            gap: 2
          }}>
            <Avatar sx={{ 
              bgcolor: `${project.accentColor}20`,
              color: project.accentColor,
              width: 48,
              height: 48,
              border: `2px solid ${project.accentColor}`
            }}>
              {project.icon}
            </Avatar>
            <Box>
              <Typography 
                variant="h5" 
                component="h3" 
                sx={{ 
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: theme.palette.mode === 'dark' ? '#fff' : theme.palette.text.primary
                }}
              >
                {project.title}
              </Typography>
              <Typography 
                variant="subtitle2" 
                sx={{ 
                  fontWeight: 500,
                  color: 'text.secondary'
                }}
              >
                {project.date}
              </Typography>
            </Box>
          </Box>
          
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 3,
              color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)'
            }}
          >
            {project.description}
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 1,
            mt: 'auto'
          }}>
            {project.technologies.slice(0, 4).map((tech, i) => (
              <Chip 
                key={i} 
                label={tech} 
                size="small" 
                sx={{ 
                  bgcolor: 'transparent',
                  fontWeight: 500,
                  border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                  '& .MuiChip-label': {
                    px: 1.2
                  }
                }} 
              />
            ))}
            {project.technologies.length > 4 && (
              <Tooltip title={project.technologies.slice(4).join(', ')}>
                <Chip 
                  label={`+${project.technologies.length - 4}`} 
                  size="small" 
                  sx={{ 
                    bgcolor: 'transparent',
                    fontWeight: 500,
                    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`
                  }} 
                />
              </Tooltip>
            )}
          </Box>
        </CardContent>
        
        <CardActions sx={{ 
          px: 3,
          pb: 3,
          pt: 0
        }}>
          
        
         
        </CardActions>
      </Card>
    </motion.div>
  );
};

const ProjectModal = ({ project, open, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const theme = useTheme();

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '16px',
          bgcolor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#fff',
          backgroundImage: 'none'
        }
      }}
    >
      <DialogTitle sx={{ 
        borderBottom: `1px solid ${theme.palette.divider}`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        pr: 2
      }}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            {project.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {project.date}
          </Typography>
        </Box>
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </DialogTitle>
      
      <DialogContent sx={{ pt: 3 }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          gap: 3
        }}>
          <Box sx={{ 
            width: { xs: '100%', md: '50%' },
            position: 'relative',
            borderRadius: '12px',
            overflow: 'hidden',
            minHeight: '300px',
            bgcolor: theme.palette.mode === 'dark' ? '#2a2a2a' : '#f5f5f5'
          }}>
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={project.images[currentImageIndex]}
                alt={`Project screenshot ${currentImageIndex + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  position: 'absolute',
                  top: 0,
                  left: 0
                }}
              />
            </AnimatePresence>
            
            {project.images.length > 1 && (
              <>
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevImage();
                  }}
                  sx={{
                    position: 'absolute',
                    left: 10,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    bgcolor: 'rgba(0,0,0,0.5)',
                    color: '#fff',
                    '&:hover': {
                      bgcolor: 'rgba(0,0,0,0.7)'
                    }
                  }}
                >
                  <ArrowBack />
                </IconButton>
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextImage();
                  }}
                  sx={{
                    position: 'absolute',
                    right: 10,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    bgcolor: 'rgba(0,0,0,0.5)',
                    color: '#fff',
                    '&:hover': {
                      bgcolor: 'rgba(0,0,0,0.7)'
                    }
                  }}
                >
                  <ArrowForward />
                </IconButton>
              </>
            )}
            
            <Box sx={{ 
              position: 'absolute',
              bottom: 10,
              left: 0,
              right: 0,
              display: 'flex',
              justifyContent: 'center',
              gap: 1
            }}>
              {project.images.map((_, index) => (
                <Box
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    bgcolor: currentImageIndex === index ? project.accentColor : theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </Box>
          </Box>
          
          <Box sx={{ width: { xs: '100%', md: '50%' } }}>
            <Typography variant="body1" paragraph sx={{ mb: 3 }}>
              {project.longDescription}
            </Typography>
            
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Technologies Used
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
              {project.technologies.map((tech, i) => (
                <Chip 
                  key={i} 
                  label={tech} 
                  sx={{ 
                    bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                    fontWeight: 500
                  }} 
                />
              ))}
            </Box>
          </Box>
        </Box>
      </DialogContent>
      
      <DialogActions sx={{ 
        borderTop: `1px solid ${theme.palette.divider}`,
        justifyContent: 'space-between',
        px: 3,
        py: 2
      }}>
        <Button 
          variant="outlined"
          href={project.links.caseStudy}
          target="_blank"
          sx={{ 
            color: project.accentColor,
            borderColor: `${project.accentColor}80`,
            '&:hover': {
              borderColor: project.accentColor
            }
          }}
        >
          View Case Study
        </Button>
        
        <Box sx={{ display: 'flex', gap: 1 }}>
          
         
        </Box>
      </DialogActions>
    </Dialog>
  );
};

const Projects = () => {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <Box 
      id="projects"
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, sm: 4 },
        background: theme.palette.mode === 'dark'
          ? 'radial-gradient(circle at center, #1a1a1a 0%, #121212 100%)'
          : 'linear-gradient(to bottom, #f9f9f9 0%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          zIndex: 1
        }
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants}>
            <Typography 
              variant="h3" 
              component="h2" 
              sx={{ 
                fontWeight: 800, 
                mb: 2, 
                textAlign: 'center',
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                position: 'relative',
                '&:after': {
                  content: '""',
                  display: 'block',
                  width: '80px',
                  height: '4px',
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  margin: '16px auto 0',
                  borderRadius: '2px'
                }
              }}
            >
             My Research Experience
            </Typography>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                textAlign: 'center', 
                maxWidth: '700px', 
                mx: 'auto',
                mb: 6,
                color: 'text.secondary'
              }}
            >
              A collection of my most significant research work showcasing my interest towards the field
            </Typography>
          </motion.div>

          {/* Category Tabs */}
          <Paper 
            elevation={0}
            sx={{ 
              mb: 4,
              p: 1,
              borderRadius: '12px',
              bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
              border: `1px solid ${theme.palette.divider}`
            }}
          >
            <Tabs
              value={selectedCategory}
              onChange={(e, newValue) => setSelectedCategory(newValue)}
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
              sx={{
                '& .MuiTabs-indicator': {
                  height: '100%',
                  borderRadius: '8px',
                  bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'
                }
              }}
            >
              {projectCategories.map((category) => (
                <Tab
                  key={category.id}
                  value={category.id}
                  label={category.label}
                  sx={{
                    textTransform: 'none',
                    fontWeight: 600,
                    minHeight: '48px',
                    '&.Mui-selected': {
                      color: theme.palette.text.primary
                    }
                  }}
                />
              ))}
            </Tabs>
          </Paper>

          {/* All Projects */}
          <Typography variant="h5" component="h3" sx={{ mb: 3, fontWeight: 700 }}>
            {selectedCategory === 'all' ? 'All Research Work' : projectCategories.find(c => c.id === selectedCategory)?.label}
          </Typography>
          
          {filteredProjects.length > 0 ? (
            <Grid container spacing={4}>
              {filteredProjects.map((project) => (
                <Grid item xs={12} sm={6} md={4} key={project.id}>
                  <ProjectCard project={project} theme={theme} openModal={openModal} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Paper sx={{ p: 4, textAlign: 'center' }}>
              <Typography variant="h6" color="text.secondary">
                No projects found in this category
              </Typography>
            </Paper>
          )}

          {/* View More Button */}
          <motion.div 
            variants={itemVariants}
            style={{ textAlign: 'center', marginTop: '40px' }}
          >
            
          </motion.div>
        </motion.div>
      </Container>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          open={modalOpen} 
          onClose={closeModal} 
        />
      )}
    </Box>
  );
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.17, 0.67, 0.83, 0.67]
    }
  }
};

export default Projects;